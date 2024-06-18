const saludar = (nombre, apellido) => {
    return new Promise((resolve, reject) => {
        if (!nombre) {
            reject(new Error("Falta el nombre"))
        };
        if (!apellido) {
            reject(new Error("Falta el apellido"))
        };
        setTimeout(() => {
            resolve (`Hola ${nombre} ${apellido}`);
        }, 1000);
    });
};

/* saludar("Juan", "Perez")
    .then((response) => {
        const bienvenida = `${response}, ¡¡Bienvenido!`;
        //return bienvenida;
       return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (bienvenida);
            }, 1250);
        })
    })
    .then((response) => `${response} :-)`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Fin de instrucciones"));
 */

async function demo(params) {
    const saludo = await saludar ("Juan", "Perez");
    console.log(saludo);
    const saludo2 = await saludar ("Lorena", "Perez");
    console.log(saludo2);
}

demo();




