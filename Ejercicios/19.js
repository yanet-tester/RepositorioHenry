function esPositivo(numPosi) {
  
  // Verifica si el número es positivo, negativo o cero
  if (numPosi > 0) {
    return "Es positivo";
  } else if (numPosi < 0) {
    return "Es negativo";
  } else {
    return false;
  }

  
}
// Llamadas a la función con diferentes números
console.log(esPositivo(5)); // Salida esperada: "Es positivo"
console.log(esPositivo(-3)); // Salida esperada: "Es negativo"
console.log(esPositivo(0)); // Salida esperada: false



  
  module.exports = esPositivo;