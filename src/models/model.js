
//1. usando el modulo de mongoose para crear un Schema
const mongoose = require('mongoose');

//2. declarano la creacion del schema  con new mongoose.schema

const userSchema = new mongoose.Schema({
    
    userId:{type: Number},
    name:{type: String},
    email:{type: String},
    password:{type: String}
    // nombre:{type: String},
    // apellido:{type: String},
    // edad :{type: String},
    // diretion :{type:String}

});


//3.  asignadole el schema ala Collection que ya tenemos en la database
const user = mongoose.model('ejemplos',userSchema);

// 4. exportando el schema para utilizarlo en otros lados de la aplication
module.exports = user;
