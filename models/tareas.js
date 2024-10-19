const Tarea = require("./tarea")

class Tareas{
    __listado = {};

    constructor(){
        this.__listado = {};
    }

    crearTarea(desc){
        const tarea = new Tarea(desc);
        this.__listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;