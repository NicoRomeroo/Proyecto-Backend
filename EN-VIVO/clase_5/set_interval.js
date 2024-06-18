let contador = 0;

const interval = setInterval(() => {
    console.log("Hola Mundo");
    contador++;

    if (contador == 4) {
        clearInterval(interval);
    }
}, 1000);
console.log("Bienvenidos");


