class TicketManager {
    precioBaseDeGanancia;

    constructor() {
        this.#precioBaseDeGanancia = 0.15;
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    #generarId = () => {
        let maxValue = 0;
        this.eventos.forEach((evento) => {
            if (evento.id > maxValue) {
                maxValue = evento.id;
            }
        });

        return maxValue + 1;
    }

    agregarEvento = (nombre, lugar, precio, capacidad = 50, fecha = new Date ().toLocaleDateString()) => {
        const evento = {
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes: [],
        };
        this.eventos.push(evento);
    }

}