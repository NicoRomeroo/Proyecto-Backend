class UsersManager {
    static usuarios = [];

    #crypto;
    #algorithm;
    #key;
    #vi;

    constructor() {
        this.#crypto = require("crypto");
        this.#algorithm = "AES-128-CBC";
        this.#key = "miClaveSecreta24";
        this.#vi = this.#crypto.randomBytes(16);
    }

    #encriptar = (texto) => {
        const cifrador = this.#crypto.createCipheriv(this.#algorithm, this.#key, this.#vi);

        let textoEncriptado = cifrador.update(texto, "utf8", "hex");
        textoEncriptado = cifrador.final("hex");

        return textoEncriptado;
    }

    crearUsuario = (nombre, apellido, nombreDeUsuario, contrasenia) => {
        const nuevoUsuario = {
            nombre,
            apellido,
            nombreDeUsuario: nombreDeUsuario.trim(),
            contrasenia: this.#encriptar(contrasenia.trim()),
        };

        UsersManager.usuarios.push(nuevoUsuario);
    }

    mostrarUsuarios = () => {
        return UsersManager.usuarios;
    }

    validarUsuario = (nombreDeUsuario, contrasenia) => {
        const usuario = UsersManager.usuarios.find((usuario) => usuario.nombreDeUsuario === nombreDeUsuario.trim());
        if (!usuario) {
            console.log("El usuario no existe");
        } else if (usuario.contrasenia != this.#encriptar(contrasenia.trim())) {
            console.log("La contraseña no coincide");
        } else {
            console.log("Logueado");
        }
    }
}

const usersManager = new UsersManager();
usersManager.crearUsuario("Juan", "Perez", "juan2024", "123456");
usersManager.crearUsuario("Lorena", "Paez", "lore2000", "myPass");
usersManager.crearUsuario("Dario", "Medina", "dario1", "dario1");

console.log(usersManager.mostrarUsuarios());
usersManager.validarUsuario("lore2000", "myPass1");




