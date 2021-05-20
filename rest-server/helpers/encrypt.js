const bcryptjs = require('bcryptjs');

const encrypt = (password, user) => {
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);
}

module.exports = {
    encrypt
}