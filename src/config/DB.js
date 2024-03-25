
//1.  creando la conection con mongoose

const mongoose = require('mongoose');

//1.1 declarndo la variable global de user ala que le asignaremos la coleccion y con la que despues aremos las consultas
let user;

//2.  creando la conection con la  base de datos de mongodb y ascediendo a nuestras coleciones

const connectDB = async () => {
    //2.1  manejando los errores con trycatch
    try {

        // 2.2  validando  que user exista de lo contrario crearlo y agsinarle  la colllection ejmplos  y requiriendo los modelos y el schema
        if (!user) {
            user= mongoose.model('ejemplos', require('../models/model').schema);
        }
        // 2.3 usando await para conectarnos con la base de datos
        await mongoose.connect('mongodb+srv://camilomanco2005:v6ZWgy5WkuGWDl5P@camilo.lfzjq3i.mongodb.net/')
        // mensaje para validar que la connection se haya validado y se haya hecho corectamente
        .then(()=>{console.log('conneted database')})
        .catch((err)=>{console.log(err)});

        // 2.4 llamanco a la funcion initializeData en caso de que queramos trabajar con datos quemados
        await initializeData();
    } catch (err) {
        console.error('Failed to connect database:', err);
        process.exit(1);
    }
};

const initializeData = async () => {

    try {





        console.log('Data successfully initialized');
    } catch (error) {
        console.error('data failed to connect database', error);
        process.exit(1);
    }
}



// 3. exportando la funcion principal de connectDB para usarla en las demas carpetas

module.exports = connectDB;
























