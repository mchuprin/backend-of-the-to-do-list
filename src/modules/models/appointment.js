const mongoose = require('mongoose');

const { Schema } = mongoose;

const AppointmentScheme = new Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    doctor: {type: String, required: true},
    date: {type: Date, required: true},
    appointment: {type: String, required: true}
});

module.exports = Appointment = mongoose.model('appointments', AppointmentScheme)