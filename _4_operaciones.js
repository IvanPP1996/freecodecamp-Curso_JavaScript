// Operaciones aritmeticas ---------------------------------------------------------------------------

/* var suma = 7 + 12;
console.log("Suma: ", suma);

var resta = 15 - 5;
console.log("Resta: ", resta);

var multiplicacion = 5 * 5;
console.log("Multiplicación: ", multiplicacion);

var division = 10 / 2;
console.log("División: ", division); */

// Numeros decimales ---------------------------------------------------------------------------------

/* var decimal = 23.4;

var producto = decimal * 10.4;
console.log("Multiplicación: ", producto);

var division = 5.0 / 2.0;
console.log("Divisón: ", division); */

// Resto o modulo -----------------------------------------------------------------------------------

/* var resto = 15 % 4;
console.log("resto: ", resto); */

// Incrementar valor de variable --------------------------------------------------------------------

/* var librosComprados = 105;
console.log(librosComprados);

librosComprados = librosComprados + 1;
console.log(librosComprados);

librosComprados++; // Suma 1
console.log(librosComprados); */

// Reducir valor de variable --------------------------------------------------------------------

/* var numeroEstudiantes = 256;
console.log(numeroEstudiantes);

numeroEstudiantes = numeroEstudiantes - 1;
console.log(numeroEstudiantes);

numeroEstudiantes--;
console.log(numeroEstudiantes);*/

// Asignación de suma, resta, multiplicación y división ------------------------------------------

/* var a = 23;

a += 5;
console.log(a);

a -= 18;
console.log(a);

a *= 2;
console.log(a);

a /= 5;
console.log(a); */

// variables con cadenas y caracteres ------------------------------------------------------------

/* var nombre = 'Alan';
var nombre_2 = "Juan";

console.log(nombre);
console.log(nombre_2);

var miCadena = "Cadena de de \"caracteres\" con comillas";
var miCadena_2 = 'Cadena de de \"caracteres\" con comillas simples';
console.log(miCadena);
console.log(miCadena_2); */

// Secuencia de escape ---------------------------------------------------------------------------

/*
Código  |   Resultado       |
--------|-------------------|
\'  |   Comilla simple  |
\"  |   Comilla doble   |
\\  |   Barra invertida |
\n  |   Línea nueva     |
\r  |   Retorno de carro|
\t  |   Tabulación      |
\b  |   Retroceso       |
\f  |   Salto de página |
... |   ...             |
*/

/* console.log("Estoy aprendiendo \"JavaScript\"");
console.log("Estoy aprendiendo \\ JavaScript");
console.log("Estoy aprendiendo\nJavaScript"); */

// Concatenar cadenas ---------------------------------------------------------------------------

/* var nombreCompleto = "Alan " + "Turing";
console.log(nombreCompleto);

var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo + " con freeCodeCamp";

console.log(mensaje);

var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con freeCodeCamp";
console.log(mensajeCompleto);

mensajeCompleto += parteFinal;
console.log(mensajeCompleto);

var miCadena;

miCadena = "JavaScript";
console.log(miCadena.length); // Largo de la cadena de caracteres */

// Notación de corchetes ----------------------------------------------------------------------

/* var lenguajeDePro = "JavaScript"

console.log(lenguajeDePro[0]); // J
console.log(lenguajeDePro[5]); // c
console.log(lenguajeDePro[9]); // t */

// Inmutabilidad cadenas caracteres -----------------------------------------------------------

/* var micadena = "Jola, mundo";
console.log(micadena);

micadena = "Hola, mundo";
console.log(micadena); */

// Notación de corchetes enésimo caracter -----------------------------------------------------

/* var miCadena = "JavaScript";
console.log(miCadena[10]); // UNDEFINED
console.log(miCadena[-3]); // UNDEFINED
console.log(miCadena[5.6]); // UNDEFINED */

// Notación de corchetes ultimo caracter -----------------------------------------------------

/* var miCadena = "JavaScript";

console.log(miCadena[miCadena.length - 1]); */

// Notación de corchetes de derecha a izquierda ----------------------------------------------

/* var miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 2]); */

// Palabras en blanco ------------------------------------------------------------------------

/* var miSustantivo = "bicicleta";
var miAdejetivo  = "pequeña";
var miVerbo  = "voló";
var miAdverbio  = "lentamente";

var palabrasEnBlanco = "La " + miSustantivo + " " + miAdejetivo + " " + miVerbo+ " a la tienda "  + miAdverbio + ".";
console.log(palabrasEnBlanco); */