function tienenMismaLongitud(str1, str2) {
    return str1.length === str2.length;
  }
  
  // Verificación y llamada a la función
let str1 = "Hola";
let str2 = "Adiós";

if (tienenMismaLongitud(str1, str2)) {
  console.log("Los strings tienen la misma longitud.");
} else {
  console.log("Los strings tienen longitudes diferentes.");
}
  module.exports = tienenMismaLongitud;