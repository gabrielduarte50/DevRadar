const express = require("express"); //modulo express imporatado a variavel express
const mongoose = require("mongoose");
const routes = require("./routes"); //caminho relativo na pasta
const cors = require("cors"); // permite acesso de outras APIS (retira o bloquieo de outras apis)
const app = express(); //express é uma funçao

mongoose.connect(
  "mongodb+srv://Gabriel:delete22@cluster0-w6v1b.mongodb.net/duarte?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json()); //dizemos que o app aceitara/cadastra os arquivos com body tipo JSON
app.use(routes); //passamos as rotas que criaremos

// MÉTODOS HTTP - GET, POST, PUT, DELETE
//TIPOS DE PARAMETROS
// Query Params: req.query (filtros,ordenaçao,paginaçao) ||  são usados no GET, pois get nao aceita body. Usamos por exemplo em uma busca em algo e  passados na URL, tipo usuarios
// Route Params: req.params (identificar um recruso na alteraçao ou remoçao) || put e delete(indicam APENAS 1 USUARIO onde passamos o ID), fica so na rota
// Body: req.body (criaçao ou alteraçao)     essencial no POST e PUT- enviar pelo corpo da requisiçao e o type é JSON

// MONGODB
// Banco nao relacional --
// usaremos o online que funciona como um servidor

//NODE tende a bloquear apis externas, USAMOS A EXTENSÃO #CORS# PARA QUE ISSO NÃO OCORRA

app.listen(3333); //definiremos uma porta local para acessar
