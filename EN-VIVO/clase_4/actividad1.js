const generarNumerosAleatoriosEntre1y20 = () => {
    return new Promise((resolve, reject) => {
        const numerosAleatorios = {};

        for (let i = 0; i < 10000; i++) {
            const numeroAleatorio = Math.floor (Math.random() *20 + 1);

            if (numerosAleatorios[numeroAleatorio] != undefined) {
                numerosAleatorios[numeroAleatorio]++;
            } else {
                numerosAleatorios[numeroAleatorio] = 1;
            }
        }

        if (Object.keys(numerosAleatorios).length === 0) {
            reject(new Error("Hubo un error en la generacion de numeros"))
        } else {
            resolve(numerosAleatorios);
        }
    });
}

generarNumerosAleatoriosEntre1y20()
    .then((response) => console.log("Proceso terminado", response))
    .catch((error) => console.log(error.message))

console.log("Hilo principal");










