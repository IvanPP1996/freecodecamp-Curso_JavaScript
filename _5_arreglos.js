/* var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas); */

// Arreglos anidados ----------------------------------------------------------

/* var listaEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(listaEstudiantes); // Para correr en la terminal con node
console.log(JSON.stringify(listaEstudiantes)); // Convirtiendo a archivo JSON (Para correr en la consola de depuración)

var listaProductos =[["Camisa", 5.64, "S134"],["Celular", 250, "S356"], ["Zapatos", 3.67, "S678"]];
console.log(JSON.stringify(listaProductos));

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
console.log(JSON.stringify(datos)); */

// Acceder a elementos de un arreglo -----------------------------------------

/* var miArreglo =[10, 20, 30];

console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma); */

// Modificar elementos de un arreglo -----------------------------------------

/* var miArreglo =[10, 20, 30];
console.log(miArreglo);
miArreglo[0] = 40;
miArreglo[1] = "Hola";
miArreglo[2] = [1, 2, 3,];
console.log(JSON.stringify(miArreglo)); */

// Acceder a arreglos multidimensionales -------------------------------------

/* var miArreglo = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log(miArreglo[0]);
console.log(miArreglo[1][2]);
console.log(miArreglo[2][0]); */

// Metodos en los arreglos --------------------------------------------------

// Agregar un elemento al final del arreglo
var estaciones =["Invierno", "Otoño", "Primavera"];
console.log(estaciones);
// Usando metodos (metodo push)
estaciones.push("Verano");
console.log(estaciones);
