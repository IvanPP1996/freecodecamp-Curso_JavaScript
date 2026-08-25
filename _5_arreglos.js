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
/* var estaciones =["Invierno", "Otoño", "Primavera"];
console.log(estaciones);
// Usando metodos (metodo push)
estaciones.push("Verano");
console.log(estaciones); */

// Agregar un elemento al principio del arreglo
/* var estaciones =["Invierno", "Otoño", "Primavera", "Verano"];
// Usando metodos (metodo unshift)
estaciones.unshift("Nueva temporada");
console.log(estaciones) */


// Quitar un elemento al final del arreglo
/* var estacion;
var estaciones =["Invierno", "Otoño", "Primavera"];
// Usando metodos (metodo pop)
estacion = estaciones.pop();
console.log(estaciones);
console.log(estacion); */

// Quitar un elemento al principio del arreglo
/* var estaciones =["Invierno", "Otoño", "Primavera", "Verano"];
// Usando metodos (metodo shift)
estaciones.shift();
console.log(estaciones); */

// Ejercicio con arreglos --------------------------------------------------

var miListaDeCompras = [["Cereal", 3],["Leche", 2],["Galletas", 4],["Pan", 5],["Refresco", 7],["Pollo", 7]];

console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[3][1] + " unidades de " + miListaDeCompras[3][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[4][1] + " unidades de " + miListaDeCompras[4][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[5][1] + " unidades de " + miListaDeCompras[5][0] + ".");
