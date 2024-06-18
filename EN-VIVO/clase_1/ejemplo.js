const saludar = () => {
    let saludo = "Hola mundo";

    const retornarSaludo = () => {
        console.log(`${saludo}, Bienvenidos`);
    };

    return retornarSaludo;
};

saludar();