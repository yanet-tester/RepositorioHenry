function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Verificación y llamada a la función
let numero = 7;

if (esNumeroPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}
  module.exports = esNumeroPrimo;
  