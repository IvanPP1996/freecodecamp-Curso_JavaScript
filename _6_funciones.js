// Declarando funciones --------------------------------------------------

/* function mostrarmensaje () {
    console.log("Hola esto es una función");
};

mostrarmensaje(); */

// Argumentos en funciones -----------------------------------------------

/* function sumar (num1, num2) {
    res = num1 + num2;
    console.log(`El resultado de ${num1} + ${num2} = ${res}`)
};

var x = 5;
var y = 10;

sumar(4, 9);
sumar(x, y);

function concatenartrescadenas (cadena1, cadena2, cadena3) {
    console.log(`${cadena1} ${cadena2} ${cadena3}`)
};

concatenartrescadenas("Estoy", "aprendiendo", "a programar"); */

// Ambito global en funciones -----------------------------------------------

// Global
/* var variableGlobal = 5;

// console.log(variableGlobal);

function miFuncion () {
    console.log(variableGlobal);
};

miFuncion(); */

// Ambito local en funciones -----------------------------------------------

/* function miFuncionLocal () {
    var variableLocal = 4;
    console.log(variableLocal);
};

miFuncionLocal();

console.log(variableLocal); // Error porque la variable esta definida dentro de la función */

// Local vs Global funciones -----------------------------------------------

/* var miNombre = "Nora";

function mostrarMinombre () {
    var miNombre = "Gino";
    console.log(miNombre);
};

mostrarMinombre();

console.log(miNombre); */

// Retornar valores en funciones --------------------------------------------

/* function sumar (a, b) {
    return a +b;
};

console.log(sumar(5, 3)); */

// Undefined en funciones ---------------------------------------------------

/* function sumar (a, b) {
    console.log(a +b);
};

console.log(sumar(5, 3)); */

// Asignar valor retornado en funciones -------------------------------------

/* function sumar (a, b) {
    return a +b;
};

var res = sumar(5, 3);

console.log(res); */

// Ejercicio en funciones ---------------------------------------------------

/* function proximoEnFila (arr, elem) {
    arr.push(elem);
    return arr.shift();
};

var arr = [1,2,3,4,5];
console.log(`Antes: ${JSON.stringify(arr)}`); // Para mostrar como un arreglo

console.log(proximoEnFila(arr, 6));

console.log(`Después: ${JSON.stringify(arr)}`); // Para mostrar como un arreglo */

// Patron de retorno en funciones ---------------------------------------------------

/* function calcularraizCuadrada(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
};

console.log(calcularraizCuadrada(25)); */