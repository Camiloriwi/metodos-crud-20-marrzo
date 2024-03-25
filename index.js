
// obteniendo los modulos que vamos a utilizar 

const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./src/config/DB');
const routes = require('./src/routers/ruoter');
const auth = require("./src/midleware/auth");

// asignandole exprress();  al aconstante app

const app = express();
// definiendo el puerto que utilizaremos 
const port = 3000;


// llamando la funcion que exportamos de connetion con la base de datos
connectDB();



// Analiza las solicitudes entrantes con el tipo de contenido application/json.
app.use(bodyParser.json());

// Analiza las solicitudes entrantes con el tipo de contenido application/x-www-form-urlencoded.
// Cuando extended está establecido en false, bodyParser utiliza la función querystring de Node.js para analizar los cuerpos de las solicitudes entrantes. 
// Cuando extended está establecido en true, utiliza la biblioteca qs para analizar los cuerpos de las solicitudes entrantes, lo que permite analizar objetos anidados y matrices. 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(auth.initialize());

// Configura las rutas
app.use('/', routes);

// mensaje que se mostrara en consola para  indicar el puerto al que estamos connectados

app.listen(port,()=>{console.log(`connected at http://localhost:${port}`)});




