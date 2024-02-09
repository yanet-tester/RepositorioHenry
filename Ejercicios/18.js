function esImpar(num35) {
  return num35 % 2 !== 0;
}

// Verificación y llamada a la función
let num35 = 47;

if (esImpar(num35)) {
  console.log("El número es impar.");
} else {
  console.log("El número es par.");
}
  
  
  
  module.exports = esImpar;