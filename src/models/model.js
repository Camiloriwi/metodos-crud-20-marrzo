
const mongoose = require('mongoose');

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

const user = mongoose.model('ejemplos',userSchema);

module.exports = user;
