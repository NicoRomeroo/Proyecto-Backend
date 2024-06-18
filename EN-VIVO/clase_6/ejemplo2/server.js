
import express from "express";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.get("/saludo", (req, res) => {
    res.send("¡Hola a todos, pero ahora desde express!")
});

server.get("/despedida", (req, res) => {
    res.send("¡Chau!")
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
