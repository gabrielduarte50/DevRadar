//representaçoes de entidades -- informaçoes que queremos armazanar-- no exemplo queremos o DESENVLVEDOR --DEV
//entao criamos um model Dev

const mongoose = require("mongoose"); //pois o mongoDb precisa saber o formato
const PointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
  //estruturaçao de uma entidade
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphere" // esfera 2d
  }
}); //estruturaçao de como o modelo é

//info: alguns dados pegaremos direto do github, entao usaremos a API do git
//
module.exports = mongoose.model("Dev", DevSchema); //exportando o model, passamos o nome que o model é salvo no banco de dados
