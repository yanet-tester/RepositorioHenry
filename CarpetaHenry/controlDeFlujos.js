function viajar (destino) {
    if (destino === "Brasil"){    //condicional, comparación booleana
        console.log("Gire a la izquierda"); // Si es true, se ejecuta el cuerpo entre llaves
    } else if (destino === "Argentina"){  //Si es falsa se ejecutará el cuerpo siguiente
        console.log("Gire a la derecha"); //Se agrega else (if) para anidar condicionales
    } else {
        console.log("Nos perdimos");
    }
};

viajar('Paraguay');


function puedeManejar(edad){
    if(edad >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
};

puedeManejar(17);