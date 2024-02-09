// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
  let random = Math.random();
  
  return Math.floor(random * 100);
}

console.log(numeroRandom());
  module.exports = numeroRandom;
  