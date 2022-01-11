const mongoose = require('mongoose');

const { Scheme } = mongoose;

const userScheme = new mongoose.Schema({
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

module.exports = User = mongoose.model('users', userScheme)