const Appointment = require ('../models/appointment');
const jwt = require('jsonwebtoken');

module.exports.allAppointments = (req, res, next) => {
    try {
        const authorizationHeaders = req.headers.authorization;
        const accessToken = authorizationHeaders.split(' ')[1];
        const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const userId = userData.id
        Appointment.find({userId}).then(result => {
            res.send(result);
        });
    } catch (error) {
        next(error)
    }
    
};

module.exports.createAppointment = async (req, res, next) => {
    try {
        const authorizationHeaders = req.headers.authorization;
        const accessToken = authorizationHeaders.split(' ')[1];
        const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const userId = userData.id;
        const body = req.body;
        const appointment = await Appointment.create({
            userId: userId,
            name:body.name,
            doctor:body.doctor,
            date:body.date,
            appointment:body.appointment
        })
        return res.send(appointment) 
    } catch (error) {
        next(error)
    }
};

module.exports.deleteAppointment = async (req, res, next) => {
    try {
        const deleteId = req.query.id;
        const deletingApp = await Appointment.deleteOne({deleteId})
        .then(result => {
            res.send(result)
        })
    } catch (error) {
        next(error)
    }
}

module.exports.editAppointment = async (req, res, next) => {
    try {
        const body = req.body
        const _id = body._id
        const editingAppointment = await Appointment.updateOne({_id} , {
            name: body.name,
            doctor: body.doctor,
            date: body.date,
            appointment: body.appointment
        })
        .then (result => {
            res.send(result)
        })
    } catch (error) {
        next(error)
    }
}
