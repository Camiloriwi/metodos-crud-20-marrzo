
const express = require('express');
const router = express.Router();
const userControl = require('../controllers.js/control');
const auth = require("../midleware/auth");








router.get('/api/v1/users', auth.authenticate(), userControl.getUsers);





router.get('/api/All/users', userControl.getUsers);
router.get('/api/All/may', userControl.getUsers);
router.get('/api/All/id', userControl.getUsersById);
router.get('/api/All/id/:id', userControl.getUsersByIdOne);
router.get('/api/All/name/:nombre', userControl.getUsersName);
router.post('/api/All/users', userControl.createUser);
router.patch('/api/users/update/:nombre', userControl.updateUser)
router.patch('/api/users/update/:id', userControl.updateUserById)
router.delete('/api/users/delete/:nombre', userControl.delteUser);
router.post('/register',userControl.register);
router.post('/login',userControl.login);






module.exports = router;