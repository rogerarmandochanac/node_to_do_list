const { inquirerMenu, inquirerPausa } = require("./helpers/inquirer");

require("colors");

const main = async()=>{
    let optionSelected = 0;
    do{
        optionSelected = await inquirerMenu();
        await inquirerPausa();
    }
    while (optionSelected !=0 );
};

main();