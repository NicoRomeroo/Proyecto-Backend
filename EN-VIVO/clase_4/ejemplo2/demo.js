const moment = require("moment");

const fechaActual = moment();
const fechaDeNacimiento = moment("2003-11-03");

if (!fechaDeNacimiento.isValid()) {
    console.log("Fecha invalida");
}

const diasPasados = fechaActual.diff(fechaDeNacimiento, "years");

//console.log(fechaDeNacimiento);
console.log("Dias pasados", diasPasados);


