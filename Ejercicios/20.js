function esVocal(letra) {
  // Verifica si el parámetro es una vocal
  if (letra.length !== 1) {
    return "Dato incorrecto";
  }

  letra = letra.toLowerCase();
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

console.log(esVocal("e"));
console.log(esVocal("aeiou"));
console.log(esVocal("125"));

  
  module.exports = esVocal;
  