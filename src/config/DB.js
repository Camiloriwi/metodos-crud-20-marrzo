
const mongoose = require('mongoose');

let user;



const connectDB = async () => {
    try {
        if (!user) {
            user= mongoose.model('ejemplos', require('../models/model').schema);
        }
        await mongoose.connect('mongodb+srv://camilomanco2005:v6ZWgy5WkuGWDl5P@camilo.lfzjq3i.mongodb.net/')
        .then(()=>{console.log('conneted database')})
        .catch((err)=>{console.log(err)});

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





module.exports = connectDB;
























