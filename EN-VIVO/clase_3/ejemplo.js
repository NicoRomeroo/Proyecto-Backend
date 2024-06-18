const bienvenida = (nombre, apellido) => {
    return (`Hola ${nombre} ${apellido}`);
};

const despedida = (nombre, apellido) => {
    return (`Chau ${nombre} ${apellido}`);
};

const saludar = (nombre, apellido, callback) => {
    const saludo = callback(nombre, apellido);
    console.log(saludo);
};

saludar("Juan", "Perez", despedida)



const numeros = [10, 20, 40, 100];
const incrementarEn2 = (numero) => numero + 2;
const numerosIncrementadosEn2 = numeros.map(incrementarEn2);
console.log(numerosIncrementadosEn2);

const numerosB = [5, 7, 9, 15];

Array.prototype.miMap = (callback) => {
    const nuevoArray = [];

    for (let i = 0; i < this.length; i++) {
        const valor = this[i];
        const nuevoValor = callback(valor);
        nuevoArray.push(nuevoValor);
    }

    return nuevoArray;
};

const numerosIncrementadosEn2B = numerosB.miMap(incrementarEn2);
console.log(numerosIncrementadosEn2B);




