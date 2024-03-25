
//1. llamando las librerias  que vamos a utilizar para  hacer consultas   en este caso llamando user de models  la lbr de bcrypt  jwt y jwt_sercret con jsonwebtoken

const user = require('../models/model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = "##%dasdsadasd##";

// 2. creando un objeto general userControl donde iran todas las consultas  y las  funciones asincronas que estaremos utilizando  para hacer llamados ala database

const userControl ={

    // 2.1  getUsers es una funcion que la utilizamos para  ontener los usuarios con una edad mayor  a 18 y ademas el manejo de errores con trycatch
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

    // 2.2 en este caso utilizamos getUsers  para obtener todos los datos que existan en nuestra colection o database  con el metodo user.find() y como siempre el manejo de errores con trycatch
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

    // 2.3 buscando un usuario en la base de datos por su identificador unico  en este caso el 10
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


    // 2.4 buscando  un usuario por el id que el atministrador le ingrese  mediante  el req.params retorna el usuario que corresponda a ese id unico

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


    //2.5 tambien usando req.params estamos buscando en la base de datos un usuario por nombre
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

    //2.6 crear un nuevo users method post tambien usamos req.body para obtener todos los campos o la informacion ingresada por los usuarios atraves de un formulario html de registro

    createUser: async (req, res)=>{
        try {
            const user = new user({
                nombre:req.body,
                apellido:req.body,
                edad :req.body,
                diretion: req.body,

            })
            // guardando la informacion del nuevo usuario con user.save();
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

    //2.7 actualizar usuarios por nombre a un nuevo valor ya indicado en este caso juan
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

    //2.8 acediendo a un usuario  con re.params a su id unico y el que conscida con esta busque lo atualizamos  su nombre  a cristian
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

    //2. 9 eliminando usuarios de la base de datos por su identificador unico

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

    //2.10 registra un nuevo usuario en nuestar base de datos y que toda su informacion que guardada en nuestra base de datos  para esto utilizamos un formulario de registro  y destruturamos los datos que queremos obtener  con this.register.body

    register: async (req, res) => {
        try {
            const users = await user.find();
            const { name, email, password } = req.body;

            const userData = {
                userid: users.length + 1,
                name: name,
                email: email,
                // encriptando la contraseña del usuario para no dejarla espuesta  sino con se encripta con la libreria bcrypt.hash con rango de 10 caracteres de incriptacion minima
                password: await bcrypt.hash(password,10),
            }

            const newUser = new user(userData);
            // guardando al informacion  del usuario en la base de datos
            const savedUser = await newUser.save();
            res.status(201).json(savedUser)

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // validando el inicio de secion de un usuario previamente registrado
    login: async (req, res) => {
        try {
            // obteniendo los datos ingresados por el usuario
            const { email, password } = req.body;
            // buscando que el email ingresado si exista en la base de datos
            const user = await user.find({email: email});
            // validacion que nos indica que si user no existe  no retorne un estatus 400 que nos indica  que la contraseña y el email no coinciden o son incorrectos
            if (!user) {
            return res.status(400).json({message: "Invalid username or password"});
            }
            // comparando la contraseña encriptada con bcrypt.hash  y la ingresada por el usuario con bcrypt.compare
            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            // si las contraseñas no coinciden nos retorna un status 400  que nos indica que  la contraseña no conciden
            if (!isPasswordValid) {
                return res.status(400).json({message: "Invalid username or password"});
            }
             // si las contraseñas coinciden generamos un token que nos servira en este caso por 1 hora
            const token = jwt.sign({userid: user.id }, jwt_secret, {
                expiresIn: "1h"
            })
            // mensaje que indica que el usuario inicio secion exitosamente
            res.json({message: "Logged in successfully", token})


        } catch (error) {
            console.error('Error al loguear el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }


};


// 3. exportando el onjecto general usercontrol


module.exports = userControl;




































