console.log("Hola desde el servidor");

const socket = io();

socket.on("connect", () => {
    console.log("Conectado al server");
});

socket.emit ("saludo", { message: "Hola servidor" });

socket.on("saludo-respuesta", (data) => {
    console.log(data.message);
});






