const fs = require("fs")
const path = "./db/archivo.txt";
const guardarDB = (data)=>{
    
    fs.writeFileSync(path, JSON.stringify(data));
};

const cargarDB = ()=>{
    if(! fs.existsSync(path)){
        return null;
    }
    const data = fs.readFileSync(path, {encoding:"utf-8"});
    const data_json = JSON.parse(data);
    return data_json;
}


module.exports = {guardarDB, cargarDB};