//Arquivo onde colocarei os códigos com a estruturação e comentarios 

//--------------------------------INICIO---------------------//
//const express = require('express'); //modulo express imporatado a variavel express

//const app = express(); //express é uma funçao

//app.use(express.json()); //dizemos que o app aceitara/cadastra os arquivos com body tipo JSON



/******************/
// MÉTODOS HTTP - GET, POST, PUT, DELETE
//TIPOS DE PARAMETROS
// Query Params: req.query (filtros,ordenaçao,paginaçao) ||  são usados no GET, pois get nao aceita body. Usamos por exemplo em uma busca em algo e  passados na URL, tipo usuarios
// Route Params: req.params (identificar um recruso na alteraçao ou remoçao) || put e delete(indicam APENAS 1 USUARIO onde passamos o ID), fica so na rota
// Body: req.body (criaçao ou alteraçao)     essencial no POST e PUT- enviar pelo corpo da requisiçao e o type é JSON
/******************/



//app.get('/users',(req, res) => {                       //arrow function --estudar-- paremaentros req e resp
                                                         // acessar a rota = request e pode ter informaçoes no banco de dados, o cliente envia para a gente do front
                                                         //response é a resposta ao nosso cliente
//    console.log(req.query);                             // teste com req.query e search=Duarte (retorna no terminal como um obj JSON)
//    return res.json({message: 'HELLOU'});              //enviaremos um vetor ou obj JSON
//});   

//app.delete('/users/:id',(req, res) => {                   //a barra e o :id indicam o parametro
//    console.log(req.params);                              // teste com req.paramns e id:1 (retorna no terminal como um obj JSON)
//    return res.json({message: 'HELLOU 22222'});           //enviaremos um vetor ou obj JSON
//});

//app.post('/users',(req, res) => {                             //a barra e o :id indicam o parametro
//    console.log(req.body);                                      // teste com req.body (retorna no terminal UNDEFINED- porque o express nao entendeu o JSON- criamos entao o app.use para configurar)
//    return res.json({message: 'HELLOU 33333'});                //enviaremos um vetor ou obj JSON
//});




//app.listen(3333);//definiremos uma porta local para acessar 


/*******************ROTAS***************************/
// internamente podemos passar as construçoes ligadas ao Dev- ou seja do Schema
//porem podemos modular algumas e usamos o controllers para isso
//abaixo temos um tipo de construção que usamos na maior parte do video
//nela passamos as const dentro da rota

//routes.post('/devs', async (req, res) => {
  //  const { github_username, techs, latitude, longitude }= req.body;                //buscando a info de dentro do req.boddy de forma especifica--vem do post no Insominia
  //  const apiRes = await axios.get(`https://api.github.com/users/${github_username}`) ;   //crase -- templatestrings-- podemos colcoar variaveis na string/procurar promise
    // await aguardar para depois continuar o código
    //console.log(apiRes.data);   //retorna vaaaarias informaçoes interessantes

  //  let {name, avatar_url, bio} = apiRes.data;
   // if(!name) {
    //    name = apiRes.data.login;
    //} //se name nao exisir, pega o login --tem jeito mais facil, mas n deu
   
  //  const techsArray= techs.split(',').map(tech => tech.trim());  //map percorre um array e trim limpa espaço entre paçavras
   // const location = {
    //    type:'Point',
    //    coordinates:[longitude,latitude],
    //}
   
  //  const dev = await Dev.create({   //aqui cadastramos o dev no mongoDb 
   //     github_username,
   //     name,
   //     bio,
   //     avatar_url,
   //     techs: techsArray,
   //     location,

//    })
   
   
  //  return res.json(dev); //nesse retorno, temos _id (unico) e __v(parametros do mongoose)- o segundo é versionamento e é incrementado qunado o registro é alterado 
//});