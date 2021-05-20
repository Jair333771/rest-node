const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { generateJWT } = require('../helpers/tokenJWT');

const login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });

        await validateUser(email, password);
        const token = await generateJWT(user.id);
        res.status(200).json({email, password, token});
    } catch (error) {
        console.log(error)
        return res.status(400).json(JSON.parse(error));
    }
}

const validateUser = async (email, passowrd) => {
    const user = await User.findOne({email});
    console.log(user);
    if (!user) {
        throw JSON.stringify({message: "The user or password is not exist in the application."});
    }

    if (user.state == false) {
        throw JSON.stringify({message: "The user is disabled."});
    }

    const validPass = bcryptjs.compareSync(passowrd, user.password);
    console.log(validPass)
    if (!validPass) {
        throw JSON.stringify({message: "The user or password is not correct."});
    }
}

module.exports = {
    login
}