const { request, response } = require('express');

const getUsers = (req = request, res = response) => {
    const {page = "1", limit = "10"} = req.query;
    res.status(200).send({ message: 'get API - from controller', page, limit })
}

const getUserById = (req, res) => {
    res.status(200).send({ message: 'get API' })
}

const createUser = (req, res) => {
    const body = req.body;
    res.status(200).send({ data: body })
}

const updateUser = (req, res) => {
    const { id } = req.params;
    res.status(200).send({ message: 'put API - from controller', id })
}

const deleteUser = (req, res) => {
    res.status(200).send({ message: 'delete API - from controller' })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
