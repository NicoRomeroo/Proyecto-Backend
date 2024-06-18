const moment = require("moment");
//import moment from "moment";

const fechaYHoraActual = moment();

//console.log(fechaYHoraActual.format("DD-MM-YYYY"));
//console.log(fechaYHoraActual.format("hh:mm:ss"));
//console.log(fechaYHoraActual.add(1, "day"));
console.log(fechaYHoraActual.subtract(1, "year"));