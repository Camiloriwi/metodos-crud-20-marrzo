
const pasport = require('passport');
const {Strategy, ExtractJwt} = require('passport-jwt');
const user = require('../models/model');


const jwt_sercret  = '##%dasdasadas##';

const Strategy = new Strategy(

    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_sercret
    },
    async (jwtPayload, done) => {
        const user = await user.findOne({_id: jwtPayload._id});
        return user;
    },
);