const {guardarDB, cargarDB} = require("./helpers/guardarArchivo");
const { inquirerMenu, inquirerPausa, inquirerInput, inquirerListadoTareasBorrar, confirmarBorrado, inquirerCompletar} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

require("colors");

const main = async()=>{
    let optionSelected = 0;
    let tareas = new Tareas();

    const data = cargarDB();

    if(data){
        tareas.cargarTareasFromArray(data);
    }

    do{
        optionSelected = await inquirerMenu();

        switch(optionSelected){
            case 1:
                const desc = await inquirerInput("Descripcion");
                tareas.crearTarea(desc);
                break;
            case 2:
                tareas.listadoCompleto();
                break;
            case 3:
                tareas.listadoCompletadoPendiente();
                break;
            case 4:
                tareas.listadoCompletadoPendiente(false);
                break;
            case 5:
                let id = await inquirerListadoTareasBorrar(tareas.listadoArr);
                let confirmar = await confirmarBorrado();
                if (confirmar){
                    tareas.borrarTarea(id);
                }
                break;
            case 6:
                let ids = await inquirerCompletar(tareas.listadoArr);
                tareas.toogleCompletar(ids);
                break;        
            }

        guardarDB(tareas.listadoArr);

        await inquirerPausa();
    }
    while (optionSelected !=0 );
};

main();