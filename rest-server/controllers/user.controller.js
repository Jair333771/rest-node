const { request, response } = require('express');
const { encrypt } = require('../helpers/encrypt');
const User = require('../models/user');

const getUsers = async (req = request, res = response) => {
    const { page = 1, limit = 10 } = req.query;
    const query = { state: true };

    //#region comment code await with two elements
    // const users = await User.find({ state: true })
    //     .skip(Number(page))
    //     .limit(Number(limit));
    // const total = await User.countDocuments({ state: true });
    //#endregion
    
    // Execute both promises at the same time
    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(page))
            .limit(Number(limit))
    ]);

    res.json({ data: users, page: Number(page), limit: Number(limit), total });
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const result = await User.findById(id);
    res.status(200).json({ data: result });
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

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, {state: false});    
    res.json({ data: result });
}

const deleteUserFromDatabase = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);    
    res.json({ data: result });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}