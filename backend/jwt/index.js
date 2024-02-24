const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenService = {
    getToken(user_id){
        return jwt.sign({user_id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15m'
        });
    },
    getRefreshToken(user_id){
        return jwt.sign({user_id}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "30d"
        })
    },
    getPayload(token){
        return jwt.verify(token, 'SECRET_KEY');
    }
}

module.exports = tokenService;