// Definicion o asignacion por valor
let a = 1;
let b = a;
a = 10;

// Definicion o asignacion por referencia
const personaA ={nombre: "Juan"}
const personaB = personaA;
personaA.nombre = "Lorena"
console.log(personaB);