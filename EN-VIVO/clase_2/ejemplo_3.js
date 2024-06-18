class Persona {
    // Propiedades publicas
    name;
    surname;
    edad;
    // Propiedad privada
    #esMayorDeEdad;

    constructor (name, surname, edad) {
        this.name = name;
        this.surname = surname;
        this.edad = edad;
        this.#esMayorDeEdad = this.comprobarMayoriaDeEdad();
    }

    comprobarMayoriaDeEdad = () => {
        return this.edad >= 21;
    }

    getEsMayorDeEdad = () => {
        return this.#esMayorDeEdad
    };
}

const persona1 = new Persona("Juan", "Perez", 21);
//persona1.esMayorDeEdad = false;
console.log(persona1);
console.log("Es mayor de edad: ", persona1.getEsMayorDeEdad());

const edad = 10;
const b = null;
const saludo = "buen dia";
let d;

const nuevoValor1 = edad ?? 0;
const nuevoValor2 = b ?? 100;
const nuevoValor3 = saludo ?? "Hola mundo";
const nuevoValor4 = d ?? "algo";

console.log(nuevoValor1, nuevoValor2, nuevoValor3, nuevoValor4);




