
import express from "express";
import usuarios from "./usuarios.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.get("/", (req, res) => {
    const { genero } = req.query;

    if(genero){
        const usuario = usuarios.find ((item) => item.genero === genero.trim().toUpperCase());

        if(!usuario){
            return res.send({"Error": "No se encontro ningun usuario con ese genero"})
        }

        return res.send(JSON.stringify(usuario))
    }

    res.send(JSON.stringify(usuarios))
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
