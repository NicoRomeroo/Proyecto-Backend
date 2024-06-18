
import express from "express";
import usuarios from "./usuarios.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.get("/", (req, res) => {
    const usuarioJSON = JSON.stringify(usuarios);
    res.send(usuarioJSON)
});

server.get("/:userId", (req, res) => {
    const { userId } = req.params;
    const usuario = usuarios.find ((item) => item.id === Number(userId))

    console.log(usuario);
    res.send(usuario);
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
