const inquirer = require("inquirer");
require("colors");

const questions = [
    {
        type:"list",
        name:"options",
        message:"Que desea hacer?",
        choices:[
            {
                value:1,
                name:"Crear tareas."
            },
            {
                value:2,
                name:"Listar tareas."
            },
            {
                value:3,
                name:"Listar tareas completadas."
            },
            {
                value:4,
                name:"Listar tareas pendientes."
            },
            {
                value:5,
                name:"Borrar tareas."
            },
            {
                value:5,
                name:"Completar tareas."
            },
            {
                value:0,
                name:"Salir."
            }
        ]
        
    }
]

const inquirerMenu = async()=>{
    console.clear();
    console.log("=====================".green);
    console.log("Seleccione una opcion".white);
    console.log("=====================".green);
    const {options} = await inquirer.prompt(questions);
    return options;
}

const inquirerPausa = async()=>{
    const pausa = await inquirer.prompt([{type:"input", name:"pausa", message:`Presione ${'ENTER'.green} para continuar.`}]);
    return pausa;
}

const inquirerInput = async(message)=>{
    const {desc} = await inquirer.prompt([{type:"input", name:"desc", message}]);
    return desc;
}

const inquirerListadoTareasBorrar = async (tareas=[])=>{
    let choices = tareas.map(tarea=>{
        return {
            value: tarea.id,
            name: tarea.desc,
        }
    })

    let questions = [
        {
            type:"list",
            name:"id",
            message:"Borrar",
            choices,
        }
    ]

    let {id} = await inquirer.prompt(questions);
    return id;


}

const confirmarBorrado =async ()=>{
    let choices = [
        {
            type:"confirm",
            name:"confirmar",
            message:"Esta seguro",
        }
    ]

    const {confirmar} = await inquirer.prompt(choices);
    return confirmar;
}

module.exports = {inquirerMenu, inquirerPausa, inquirerInput, inquirerListadoTareasBorrar, confirmarBorrado};