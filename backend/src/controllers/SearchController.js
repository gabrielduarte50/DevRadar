//recebe a requeisiçao faz tudo interno e volta a resposta
//fizemos uma abstraçao e agr a arrow function se torna uma namefunction
//dessa forma podemos usar em outras aprtes do projeto

const Dev = require("../models/Dev"); // .. por que esta em outra pasta
const parseStringAsArray = require("../utils/parseStringAsArray");
// funçoes do controller : index (lista), show(1 dev),store(criar), update(modificar) and destroy(delete)

module.exports = {
  // Buscar todos os devs em um raio de 10km
  // Filtrar por techs
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs); //converter string em vetor

    const devs = await Dev.find({
      //passamos obj para filtrar
      techs: {
        $in: techsArray //somnete devs com tal tech
      }, //in é operator mongo
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    }); //basicamente é a construção da QUERY

    return res.json({ devs });
  } // no console retorna todo o query que passamos pelo insominia
};
