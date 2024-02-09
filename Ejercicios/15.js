function menosQueNoventa(num) {
  return num < 90;
    
  }
  
  let num = 80;

if (menosQueNoventa(num)) {
  console.log("El número es menor que noventa.");
} else {
  console.log("El número es mayor o igual a noventa.");
}
  module.exports = menosQueNoventa;