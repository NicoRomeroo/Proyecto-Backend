
import express from "express";
import handlebars from "express-handlebars";
import path from "./utils/path.js";
import homeRouter from "./routes/home.router.js";
import serverSocketIO from "./config/socket.config.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use("/api/public", express.static(path.public));

// Configuracion de handlebars
server.engine("handlebars", handlebars.engine());
server.set("views", path.views);
server.set("view engine", "handlebars");

server.get("/api/saludo/:name", (req, res) => {
    const { name } = req.params;
    res.render("home", { name });
});

server.use("/home", homeRouter);

const serverHTTP = server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});

//configurando el servidor de websockets
serverSocketIO.config(serverHTTP);