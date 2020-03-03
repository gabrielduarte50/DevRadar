module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim()); //map percorre um array e trim limpa espaço entre paçavras
};
