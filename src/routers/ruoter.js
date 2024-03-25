
//1 declarando las librerias que vamos a utilizar en router

const express = require('express');
const router = express.Router();
const userControl = require('../controllers.js/control');
const auth = require("../midleware/auth");






// 3. usando el  auth.authenticate() del midleware  para validar y restringir ingresos o manipulacion de la informacion de los usuarios

router.get('/api/v1/users', auth.authenticate(), userControl.getUsers);



// declarando todas las rutas o empoint  que necesitamos para hacer todas las consultas  de la base de datos  previamente declaradas en controllers.control

router.get('/api/All/users', userControl.getUsers); // empoint de la consulta 2
router.get('/api/All/may', userControl.getUsers);   // empoint de la consulta 3 
router.get('/api/All/id', userControl.getUsersById);  // empoint de la consulta 4 
router.get('/api/All/id/:id', userControl.getUsersByIdOne);  // empoint de la consulta 5 
router.get('/api/All/name/:nombre', userControl.getUsersName);  // empoint de la consulta 6 
router.post('/api/All/users', userControl.createUser);  // empoit de la consulta 7
router.patch('/api/users/update/:nombre', userControl.updateUser);  // empoint de la consulta 8
router.patch('/api/users/update/:id', userControl.updateUserById); // empoint de la consulta 9
router.delete('/api/users/delete/:nombre', userControl.delteUser);  // empoint de la consulta 10
router.post('/register',userControl.register); // empoint de la consulta 11

router.post('/login',userControl.login);  // empoint de la consulta 12




//4.  exportando router

module.exports = router;