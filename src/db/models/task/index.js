const mongoose = require('mongoose');

const { Scheme } = mongoose;

const taskScheme = new mongoose.Schema({
    text: String,
    isCheck: Boolean
});

module.exports = Task = mongoose.model('tasks', taskScheme)