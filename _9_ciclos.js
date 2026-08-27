// Sentencia Switch -------------------------------------------------------

/* function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
        default:
            respuesta = "Ups opción no valida";
            break;
    }

    return respuesta;
}

// console.log(clasificarValor(9));

function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "Bajo";
            break;
        case 2:
        case 3:
            volumen = "Intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Alto";
            break;
        default:
            volumen = "Opción no valida";
            break;
    };

    return volumen;
};

// console.log(clasificarVolumen(5));

var conteo = 0;

function contarCartas (carta) {
    var desicion;

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
        break;
    };
    if (conteo >= 1) {
        decision = "Apostar"
    } else {
        decision = "Esperar"
    };

    return `${conteo} ${decision}`;
};

// console.log(contarCartas(2));
// console.log(contarCartas(3));
// console.log(contarCartas(7));
// console.log(contarCartas("K"));
// console.log(contarCartas("A")); */