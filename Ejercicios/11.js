function esMayorDeEdad(fechaNacimiento) {  
        // Obtener la fecha actual
        const fechaActual = new Date();
        // Obtener el año actual
        const añoActual = fechaActual.getFullYear();
        // Obtener el año de nacimiento de la fecha de nacimiento
        const añoNacimiento = new Date(fechaNacimiento).getFullYear();
        // Calcular la edad restando el año actual menos el año de nacimiento
        const edad = añoActual - añoNacimiento;
        // Verificar si la edad es mayor o igual a 18
        return edad >= 18;
    }
    console.log(esMayorDeEdad('2023-01-01')); //Verifica si la persona nacida en 2023 es mayor de edad
  
  
  module.exports = esMayorDeEdad;