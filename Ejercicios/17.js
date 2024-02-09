function esPar(num30) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  return num30 % 2 === 0;
}

// Verificación y llamada a la función
let num30 = 30;

if (esPar(num30)) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}
  
  module.exports = esPar;
  