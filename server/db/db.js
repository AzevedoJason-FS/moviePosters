const User = require('../api/models/users');
const mongoose = require('mongoose');

const findUser = async (user) => {
return await User.find(user).exec()
}

const saveUser = async (newUser) => {
return await newUser.save();
};

module.exports = {findUser, saveUser};