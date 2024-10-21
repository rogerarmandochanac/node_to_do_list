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

    get listadoArr(){
        let tareas = [];
        Object.keys(this.__listado).forEach(key=>{
            var tarea = this.__listado[key];
            tareas.push(tarea);
        })
        return tareas;
    }

    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea=>{
            this.__listado[tarea.id] = tarea;
        })
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea, index)=>{
            console.log(`${index + 1}.-${tarea.desc} :: ${tarea.completado?"Completado".green:"Pendiente".red}`); 
        })
    }
}

module.exports = Tareas;