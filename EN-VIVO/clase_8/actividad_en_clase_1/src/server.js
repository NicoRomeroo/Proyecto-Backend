
import express from "express";
import path from "path";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const PORT = 8080;
const HOST = "localhost";
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/public", express.static(path.join(path.basename("src"), "public")));

server.use("/api/users", usersRouter);
server.use("/api/pets", petsRouter);

server.listen(PORT, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});