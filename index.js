
const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./src/config/DB');
const routes = require('./src/routers/ruoter');
const auth = require("./src/midleware/auth");


const app = express();
const port = 3000;

connectDB();



// Analiza las solicitudes entrantes con el tipo de contenido application/json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Analiza las solicitudes entrantes con el tipo de contenido application/x-www-form-urlencoded.
// Cuando extended está establecido en false, bodyParser utiliza la función querystring de Node.js para analizar los cuerpos de las solicitudes entrantes. 
// Cuando extended está establecido en true, utiliza la biblioteca qs para analizar los cuerpos de las solicitudes entrantes, lo que permite analizar objetos anidados y matrices. 

app.use(auth.initialize());

// Configura las rutas
app.use('/', routes);


app.listen(port,()=>{console.log(`connected at http://localhost:${port}`)});




