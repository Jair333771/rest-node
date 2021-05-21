const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("The token could not be generated.")
            }
            resolve(token);
        });
    });
}

module.exports = {
    generateJWT
}