const {guardarDB, cargarDB} = require("./helpers/guardarArchivo");
const { inquirerMenu, inquirerPausa, inquirerInput} = require("./helpers/inquirer");
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
        }

        guardarDB(tareas.listadoArr);

        await inquirerPausa();
    }
    while (optionSelected !=0 );
};

main();