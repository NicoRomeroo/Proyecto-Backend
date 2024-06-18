function imprimirA() {
    console.log("Función A");
    imprimirB();
};

function imprimirB() {
    setTimeout(() => {
        console.log("Función B");
    }, 1000);

    imprimirC();
};

function imprimirC() {
    setTimeout(() => {
        console.log("Función C");
    }, 500);

    imprimirD();
};

function imprimirD() {
    console.log("Función D");
};

imprimirA();
console.log("Fin");
