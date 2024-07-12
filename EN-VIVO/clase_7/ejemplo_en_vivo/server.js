
import express from "express";
import usuarios from "./usuarios.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/api/usuarios", (req, res) => {
    const { genero } = req.query;

    if(genero){
        const usuario = usuarios.filter ((item) => item.genero === genero.trim().toUpperCase());

        if(!usuario){
            return res.status(400).send({"Error": "No se encontro ningun usuario con ese genero"})
        }

        return res.send(JSON.stringify(usuario))
    }

    res.status(200).send({ data: usuarios })
});

server.get("/api/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find ((item) => item.id === Number(id));

    if(!usuario){
        return res.status(400).send({"Error": "No se encontro ningun usuario con ese id"})
    }

    res.status(200).send({ data: usuario })
});

server.post("/api/usuarios", (req, res) => {
    const { id, nombre, apellido, edad, correo, genero } = req.body;

    if(!nombre || !apellido || !edad || !correo || !genero){
        return res.status(400).send({"Error": "Faltan datos"})
    }

    const usuarioNuevo = { id: Number(id), nombre, apellido, edad, correo, genero };
    usuarios.push(usuarioNuevo);

    res.status(200).send({ data: usuarioNuevo })
});

server.put("/api/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad, correo, genero } = req.body;
    const indice = usuarios.findIndex ((item) => item.id === Number(id));

    if (indice < 0) {
        return res.status(400).send({"Error": "No se encontro ningun usuario con ese id"})
    }

    if(!nombre || !apellido || !edad || !correo || !genero){
        return res.status(400).send({"Error": "Faltan datos"})
    }

    const usuarioModificado = { id: Number(id), nombre, apellido, edad, correo, genero };
    usuarios[indice] = usuarioModificado ;

    res.status(200).send({ data: usuarioModificado })
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
