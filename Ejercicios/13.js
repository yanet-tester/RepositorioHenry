function sonIguales(x, y) {
    // La función recibe dos argumentos "x" e "y".
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Tu código:
    return x===y;
  }
  console.log(sonIguales(5,5));
  console.log(sonIguales("Hola","Chau"));
  console.log(sonIguales("Todo Bien","Todo Bien"));
  console.log(sonIguales("3",3));
  console.log(sonIguales(2530, 2530));
  
  module.exports = sonIguales;