
import express from "express";
import usuarios from "./usuarios.js";
const PORT = 8080;
const HOST = "localhost";
const server = express();

server.get("/bienvenida", (req, res) => {
    res.send("<h1 style='color:blue;'>¡Hola a todos, Bienvenidos!</h1>")
});

server.get("/usuarios", (req, res) => {
    const usuario1 = usuarios[0];
    const usuarioJSON = JSON.stringify(usuario1)
    res.setHeader("Content-Type", "Application/json")
    res.send(usuarioJSON)
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
