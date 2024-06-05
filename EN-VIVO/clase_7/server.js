import express from "express";

const server = express();
const PORT = 8080;
const HOST = "localhost";
let frase = "Frase inicial";

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoint: Método GET que escucha en la URL http://localhost:8080/api/frase
// Devuelve un JSON con la propiedad "frase" y el valor "Frase inicial".
server.get('/api/frase', (req, res) => {
    res.send({ frase });
})

// Endpoint: Método GET que escucha en la URL http://localhost:8080/api/palabras/2
// En caso de exito, devuelve un JSON con la propiedad "palabra" y el valor "inicial".
server.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;

    if (isNaN(pos)) {
        return res.status(400).send({ status: "error", message: "Pos debe ser un número entero" })
    }

    const posEntero = parseInt(pos);
    const indice = posEntero - 1;
    const palabras = frase.split(' ');

    if (posEntero <= 0 || posEntero > palabras.length) {
        return res.status(400).send({ status: "error", message: "Posición fuera del rango" })
    }

    const palabra = palabras[indice];

    res.send({ palabra });
})

// Endpoint: Método POST que escucha en la URL http://localhost:8080/api/palabras
// En caso de exito, devuelve un JSON con dos propiedades "palabra" y "pos".
server.post('/api/palabras', (req, res) => {
    const { palabra } = req.body;
    frase += ` ${palabra}`;

    const palabras = frase.split(' ');

    res.send({ palabra, pos: palabras.length });
})

// Endpoint: Método PUT que escucha en la URL http://localhost:8080/api/palabras/2
// En caso de exito, devuelve un JSON con dos propiedades "actualizada" y "anterior".
server.put('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const { palabra } = req.body;

    if (isNaN(pos)) {
        return res.status(400).send({ status: "error", message: "Pos debe ser un número entero" })
    }

    const posEntero = parseInt(pos);
    const indice = posEntero - 1;
    const palabras = frase.split(' ');

    if (posEntero <= 0 || posEntero > palabras.length) {
        return res.status(400).send({ status: "error", message: "Posición fuera del rango" })
    }

    const anterior = palabras[indice];
    palabras[indice] = palabra;
    frase += ` ${palabra}`;

    res.send({ actualizada: palabra, anterior })
})

// Endpoint: Método DELETE que escucha en la URL http://localhost:8080/api/palabras/2
// En caso de exito, devuelve un JSON con dos propiedades "status" y "eliminada".
server.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;

    if (isNaN(pos)) {
        return res.status(400).send({ status: "error", message: "Pos debe ser un número entero" })
    }

    const posEntero = parseInt(pos);
    const indice = posEntero - 1;
    const palabras = frase.split(' ');

    if (posEntero <= 0 || posEntero > palabras.length) {
        return res.status(400).send({ status: "error", message: "Posición fuera del rango" })
    }

    const palabraEliminada = palabras[indice];
    palabras.splice(indice, 1);
    frase = palabras.join(' ');

    res.send({ status: "success", eliminada: palabraEliminada })
});

// Método oyente de solicitudes
server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});