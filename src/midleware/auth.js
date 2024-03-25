
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt")
const user = require('../models/model');


const jwt_secret = "##%dasdsadasd##";


const strategy = new Strategy( 
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },
    async (jwtPayload, done) => {
        try {
            const user = await user.findById({userid: jwtPayload._id})
            if(!user) {
                const error = new Error("User not found")
                console.log(error)
            }
            done(null, user) 

        } catch (error) {
            done(error)
        }
    }
);


passport.use(strategy);

const initialize = () => {
    return passport.initialize();
};

const authenticate = () => {
    return passport.authenticate("jwt", {session:false})
} ;

module.exports = {
    initialize,
    authenticate,
};



// explicacion de lo que realiza cada etapa del codigo

// 1. `const passport = require("passport");` - Importa el módulo Passport.js, que es un middleware de autenticación para Node.js.

// 2. `const { Strategy, ExtractJwt } = require("passport-jwt")` - Importa dos objetos desde el módulo `passport-jwt`: `Strategy` y `ExtractJwt`. `Strategy` es una estrategia de autenticación basada en tokens JSON Web (JWT). `ExtractJwt` es un conjunto de funciones auxiliares para extraer el token JWT de la solicitud HTTP.

// 3. `const user = require('../models/model');` - Importa el modelo de usuario desde el archivo `model.js` en la carpeta `models`.

// 4. `const jwt_secret = "##%dasdsadasd##";` - Define la clave secreta para firmar los tokens JWT.

// 5. La siguiente parte del código define una nueva estrategia JWT para Passport.js. Esta estrategia extrae el token JWT del encabezado de autorización de la solicitud HTTP y luego verifica el token utilizando la clave secreta. Si el token es válido, busca al usuario en la base de datos utilizando el ID del usuario que se encuentra en el payload del token JWT.

// 6. `passport.use(strategy);` - Le dice a Passport.js que use la estrategia JWT que acabamos de definir.

// 7. `const initialize = () => { return passport.initialize(); };` - Define una función que inicializa Passport.js.

// 8. `const authenticate = () => { return passport.authenticate("jwt", {session:false}) };` - Define una función que autentica las solicitudes HTTP utilizando la estrategia JWT. La opción `{session:false}` significa que no se utilizarán sesiones; cada solicitud debe proporcionar el token JWT.

// 9. `module.exports = { initialize, authenticate, };` - Exporta las funciones `initialize` y `authenticate` para que puedan ser utilizadas en otras partes de la aplicación.

