const fs = require("fs")

const guardarDB = (data)=>{
    const path = "./db/archivo.txt";
    fs.writeFileSync(path, JSON.stringify(data));
};


module.exports = guardarDB;