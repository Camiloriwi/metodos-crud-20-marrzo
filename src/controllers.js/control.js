const user = require('../models/model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = "##%dasdsadasd##"; 



const userControl ={

    getUsers: async (req, res)=>{

        try {
            const users = await user.find(edad,{gte:18});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api users',
                data: users
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });
        }

    },

    getUsers: async (req, res)=>{

        try {
            const users = await user.find();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users',
                data: users
            });


        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });

        }
    },

    getUsersById: async (req, res)=>{
        try {
            const users = await user.find({id:10});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/byid',
                data: users
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });
        }
    },


    getUsersByIdOne: async (req, res)=>{
        const {id} = req.params;
        try {
            const usersId = await user.findById(id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/byid',
                data: usersId
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });

        }
    },

    getUsersName: async (req, res)=>{
        try {
            const {nombre} =  req.params;
            const nombres = await user.findOne({nombre:nombre});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/byid',
                data: nombres
            });


        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });
        }

    },
    // crear un nuevo users method post

    createUser: async (req, res)=>{
        try {
            const user = new user({
                nombre:req.body,
                apellido:req.body,
                edad :req.body,
                diretion: req.body,

            })
            await user.save();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada method: post: /api/users',
                data: user
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });

        }
    },

    // actualizar usuarios por nombre a un nuevo valor ya indicado
    updateUser: async (req, res)=>{

        try {
            const {nombre} = req.params;
            const userUpdate = await user.findOneAndUpdate({nombre:nombre},{$set:{nombre:'juan'}});
            // const userUpdate = await User.update;
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada method: post: /api/users',
                data: userUpdate
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/update',
                error: error.message
            });

        }
    },


    updateUserById: async (req, res)=>{

        try {
            const {id} = req.params;
            const userById = await user.findByIdAndUpdate({id:id}, {$set:{nombre:'cristian'}})
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada method: post: /api/users',
                data: userById
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/update',
                error: error.message
            });

        }
    },


    delteUser: async (req, res)=>{
        try {
            const {nombre} = req.params;
            const deleteUser = await user.findOneAndDelete({id:id},{$set:{nombre:nombre}});

            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada method: post: /api/users',
                data: deleteUser
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/update',
                error: error.message
            });
        }

    },

    register: async (req, res) => {
        try {
            const users = await user.find();
            const { name, email, password } = req.body;

            const userData = {
                userid: users.length + 1,
                name: name,
                email: email,
                password: await bcrypt.hash(password,10),
            }

            const newUser = new user(userData);
            const savedUser = await newUser.save(); 
            res.status(201).json(savedUser)

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await user.find({email: email});

            if (!user) {
            return res.status(400).json({message: "Invalid username or password"});     
            }

            const isPasswordValid = await bcrypt.compare(password, user[0].password);

            if (!isPasswordValid) {
                return res.status(400).json({message: "Invalid username or password"});     
            }
            
            const token = jwt.sign({userid: user.id }, jwt_secret, {
                expiresIn: "1h"
            })

            res.json({message: "Logged in successfully", token})


        } catch (error) {
            console.error('Error al loguear el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }


};





module.exports = userControl;




































