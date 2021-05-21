const jwt = require('jsonwebtoken');
const { request, response } = require('express');
const User = require('../models/user');

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'Unauthorized, no token sended.'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);
        const authUser = await User.findById(uid);

        if (!authUser) {
            return res.status(401).json({
                msg: 'Invalid Token - user does not exist.'
            });
        }
        if (authUser.state === false) {
            return res.status(401).json({
                msg: 'Invalid Token - user disabled.'
            });
        }
        
        req.authUser = authUser;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Invalid token - invalid format'
        });
    }

}


module.exports = {
    validateJWT
}