//iremos separar as rotas
const { Router } = require("express"); //importamos o modulo de roteamento do express
// chaves é para importar coisas especificas
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router(); //temos uma funçao e acesso aos metodos GET,POST...
//entao usamos routes.  ao inves de app

//METODO GET -- enviar lista de devs
routes.get("/devs", DevController.index);

// METODO POST --- criar os devs
routes.post("/devs", DevController.store);

//GET --
routes.get("/search", SearchController.index);

//info: alguns dados pegaremos direto do github, entao usaremos a API do git
module.exports = routes;
