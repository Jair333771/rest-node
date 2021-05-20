const Role = require('../models/role');

const validateRole = async (role = '') => {
    const exist = await Role.findOne({role});
    if (!exist) {
        throw new Error(`The role ${role} is invalid`);
    }
}

module.exports = {
    validateRole
};