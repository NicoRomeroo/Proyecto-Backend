
const mostrarLista = (frutas) => {
    if (frutas.length === 0) {
        return "Lista vacía";
    }

    frutas.forEach((fruta) => {
        console.log(fruta);
    });

    return `Longitud de la lista: ${frutas.length}`;
};

let resultado1 = mostrarLista([]);
console.log("\nEJEMPLO N°1:", resultado1);

let resultado2 = mostrarLista(["bananas", "mazanas", "naranjas",]);
console.log("\nEJEMPLO N°2:", resultado2);