const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid};
        console.log(uid);
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token.")
            }
            resolve(token);
        });
    });
}

module.exports = {
    generateJWT
}