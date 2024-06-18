const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    esMayorDeEdad: true
}

const encabezados = Object.keys(persona);
console.log(encabezados);

const valores = Object.values(persona);
console.log(valores);

const entrada = Object.entries(persona);
console.log(entrada);



