const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = (req = request, res = response) => {
    const { page = "1", limit = "10" } = req.query;
    res.status(200).send({ message: 'get API - from controller', page, limit })
}

const getUserById = (req, res) => {
    res.status(200).send({ message: 'get API' })
}

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = new User({ name, email, password, role });

        encrypt(password, user);
        await user.save();

        res.status(200).json({ data: user })
    } catch (error) {
        return res.status(400).json(JSON.parse(error));
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { _id, password, google, email, ...user } = req.body;

    if (password) {
        encrypt(password, user);
    }

    const result = await User.findByIdAndUpdate(id, user);
    res.status(200).json({ data: result })
}

const deleteUser = (req, res) => {
    res.status(200).send({ message: 'delete API - from controller' })
}

const encrypt = (password, user) => {
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}