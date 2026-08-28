// Objetos -----------------------------------------------------------

var miPerro = {
    nombre: "Gino",
    edad: 5,
    peso: 6,
    raza: "Beagle",
    5: "Grande",
};

// Acceder a propiedades notación punto ------------------------------

/* console.log(miPerro.nombre); */

// Acceder a propiedades notación corchete ---------------------------

/* console.log(miPerro["nombre"]);
console.log(miPerro[5]); */

// Acceder a propiedades variables -----------------------------------

/* var resultados = {
    1: "nora256",
    2: "Gino577",
    3: "estef543",
    4: "Kiara566"
};

var poscision = 2;

console.log(resultados[poscision]); */

// Actualizar a propiedades ------------------------------------------

/* var mochilla = {
    "color": "azul",
    "tamanio": "mediano",
    "contenido": ["botella agua", "cuaderno"]
};

console.log(mochilla.color);
mochilla.color = "verde";
console.log(mochilla.color);

console.log(mochilla.contenido);
mochilla.contenido.push("lapiz");
console.log(mochilla.contenido);
mochilla.contenido = [];
console.log(mochilla.contenido); */

// Agregar a propiedades ---------------------------------------------

var curso = {
    titulo: "Aprende javaScript desde cero",
    idioma: "español",
    duracion: 30,
};

// console.log(curso);
curso.vistas = 34500;
// console.log(curso);
// console.log(curso.vistas);

// console.log(curso);
curso["usuarios"] = 45;
// console.log(curso);
// console.log(curso["usuarios"]);

// Eliminar propiedades ---------------------------------------------

// console.log(curso);
delete curso.usuarios;
// console.log(curso);

delete curso["idioma"];
// console.log(curso);

// busquedas en objetos ---------------------------------------------

/* function buscarElemento(simbolo) {

    var elementosQuimicos = {
        "AL": "Aluminio",
        "S": "Azufre",
        "CL": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };

    return elementosQuimicos[simbolo];
};

// console.log(buscarElemento("B"));
// console.log(buscarElemento("Li"));
// console.log(buscarElemento("CL")); */

// verificar propiedades en objetos ----------------------------------

/* var elementosQuimicos = {
    "AL": "Aluminio",
    "S": "Azufre",
    "CL": "Cloro",
    "He": "Helio",
    "B": "Boro",
    "Li": "Litio"
    };
    
    console.log(elementosQuimicos.hasOwnProperty("CL"));
    console.log(elementosQuimicos.hasOwnProperty("O")); */

/* function verificarPropiedad (obj, propiedad) {
        if (obj.hasOwnProperty(propiedad)) {
            return `Propiedad ${obj[propiedad]}`
        } else {
            return `El objeto no tiene propiedad`
        };
    };
    
    var miCuaderno = {
        "Color": "Verde",
        "categoria": 3,
        "precio": 4.56
    };
    
    console.log(verificarPropiedad(miCuaderno, "precio")); */

// Objetos complejos ----------------------------------------------

/* var ordenesPizzas = [
    {
        "tipo": "margarita",
        "tamanio": "individual",
        "precio": 5.67,
        "toppings": ["extra queo", "champiñones", "piña"],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamanio": "familiar",
        "precio": 18.34,
        "toppings": ["extra queso", "pimenton"],
        "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        "tamanio": "individual",
        "precio": 6.68,
        "toppings": [],
        "paraLlevar": true
    }
];

console.log(ordenesPizzas[1].tipo);
console.log(ordenesPizzas[1]["precio"]);
console.log(ordenesPizzas[1]["toppings"]);

console.log(ordenesPizzas[2].precio); */

// Objetos anidados -----------------------------------------------

function objetosAnidados() {

    var mireceta = {
        "descripcion": "mi postre favorito",
        "costo": 15.6,
        "ingredientes": {
            "masa": {
                "harina": "100grs",
                "sal": "1 cucharadita",
                "agua": "1 taza"
            },
            "cobertura": {
                "azucar": "120 grs",
                "chocolate": "4 cucharadas",
                "mantequilla": "200 grs"
            }
        }
    }
    console.log(mireceta.ingredientes.cobertura.mantequilla);
};

objetosAnidados();