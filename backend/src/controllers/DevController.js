//recebe a requeisiçao faz tudo interno e volta a resposta
//fizemos uma abstraçao e agr a arrow function se torna uma namefunction
//dessa forma podemos usar em outras aprtes do projeto

const axios = require("axios"); //faz requisiçoes/utilização de outras APIS
const Dev = require("../models/Dev"); // .. por que esta em outra pasta
const parseStringAsArray = require("../utils/parseStringAsArray");
// funçoes do controller : index (lista), show(1 dev),store(criar), update(modificar) and destroy(delete)

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs); //retorna um vetor com os devs
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body; //buscando a info de dentro do req.boddy de forma especifica--vem do post no Insominia
    let dev = await Dev.findOne({ github_username }); //testa se ja existe o Dev

    if (!dev) {
      const apiRes = await axios.get(
        `https://api.github.com/users/${github_username}`
      ); //crase -- templatestrings-- podemos colcoar variaveis na string/procurar promise
      // await aguardar para depois continuar o código
      //console.log(apiRes.data);   //retorna vaaaarias informaçoes interessantes

      let { name, avatar_url, bio } = apiRes.data;
      if (!name) {
        name = apiRes.data.login;
      } //se name nao exisir, pega o login --tem jeito mais facil, mas n deu

      const techsArray = parseStringAsArray(techs);
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        //aqui cadastramos o dev no mongoDb
        github_username,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location
      });
    }

    // internamente podemos passar as construçoes ligadas ao Dev-
    return res.json(dev); //nesse retorno, temos _id (unico) e __v(parametros do mongoose)- o segundo é versionamento e é incrementado qunado o registro é alterado
  }
};
