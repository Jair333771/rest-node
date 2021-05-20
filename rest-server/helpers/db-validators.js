const Role = require('../models/role');
const User = require('../models/user');

const validateRole = async (role = '') => {
    const exist = await Role.findOne({role});
    if (!exist) {
        throw new Error(`The role ${role} is invalid`);
    }
}

const validateEmailExist = async (email) => {
    const exist = await User.findOne({ email });
    if (exist) {
        throw new Error(`The email ${email} already exists in the application.`);
    }
}

const validateUserExist = async (id) => {
    const exist = await User.findById(id);
    if (!exist) {
        throw new Error(`The id ${id} not exists in the application.`);
    }
}

module.exports = {
    validateRole,
    validateEmailExist,
    validateUserExist
};