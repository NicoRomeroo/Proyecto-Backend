import express from "express";

const PORT = 8080;
const HOST = "127.0.0.1";
const server = express();

server.get("/", (req, res) => {

})
server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});