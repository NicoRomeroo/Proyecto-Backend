import { Router } from "express";
import uploader from "../utils/uploader.js";

const router = Router();
const pets = [];

router.get("/", (req, res) => {
    res.status(200).send({ state: "success", data: pets })
});

router.post("/", uploader.single("file"), (req, res) => {
    const { file } = req;

    if (!file) {
        res.status(400).send({ state: "error", message: "no ha seleccionado una imagen" });
    }

    const filename = file.filename;

    const { name, specie, } = req.body;
    const pet = { name, specie, thumbnails: filename };
    pets.push(pet);

    res.status(201).redirect("http://localhost:8080/public");
});

export default router;