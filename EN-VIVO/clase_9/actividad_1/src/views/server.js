
import express from "express";
import handlebars from "express-handlebars";
import paths from "./utils/path.js";
import users from "./users.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use("/api/public", express.static(paths.public));

// Configuracion de handlebars
server.engine("handlebars", handlebars.engine());
server.set("views", paths.views);
server.set("view engine", "handlebars");

server.get("/api/users", (req, res) => {
    const randomID = Math.floor(Math.random() * (users.length - 1));
    const user = users[randomID];

    res.render("users", { user });
});

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});