const { inquirerMenu, inquirerPausa, inquirerInput} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

require("colors");

const main = async()=>{
    let optionSelected = 0;
    let tareas = new Tareas();
    do{
        optionSelected = await inquirerMenu();

        switch(optionSelected){
            case 1:
                const desc = await inquirerInput("Descripcion");
                tareas.crearTarea(desc);
            case 2:
                console.log(tareas.__listado);
        }

        await inquirerPausa();
    }
    while (optionSelected !=0 );
};

main();