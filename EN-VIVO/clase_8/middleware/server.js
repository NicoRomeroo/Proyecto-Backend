
import express from "express";
import path from "path";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/public", express.static(path.join(path.basename("src"), "public")));

const middlewareA = (req, res, next) => {
    req.saludo= "Hola Mundo "
    next();
}

server.get("/saludo", middlewareA, (req, res) => {
    const nombre = req.nombre;
    res.send({saludo: "hola" + req.saludo + nombre})
});

// Rutas Inexistentes
server.use("*", (req, res) =>{
    res.status(500).send("Hubo un error en el servidor");
});

// Errores del server
server.use((error, req, res) =>{
    console.log(error.message);
    res.status(500).send("Hubo un error en servidor 2");
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

// ver en la repo