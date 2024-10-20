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

module.exports = {inquirerMenu, inquirerPausa, inquirerInput};