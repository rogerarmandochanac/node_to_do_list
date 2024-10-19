const {v4:uuidv4} = require("uuid");

class Tarea{
    id = "";
    desc = "";
    completado = null;

    constructor(description){
        this.id = uuidv4();
        this.desc = description;
    }
}

module.exports = Tarea