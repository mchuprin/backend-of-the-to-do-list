const express = require('express');
const userController = require('../controllers/auth');
const appointmentController = require('../controllers/appointments');
const authMiddleware = require('../middlewares/auth-middleware');
const router = express.Router();

router.get('/allClients' ,userController.getAllClients);
router.get('/refresh', userController.refresh);
router.post('/registration', userController.registration);
router.post('/authorization', userController.authorization);
router.post('/logout', userController.logout);

router.get('/appointments', authMiddleware, appointmentController.allAppointments);
router.post('/createAppointment', authMiddleware, appointmentController.createAppointment);
router.delete('/deleteAppointment', authMiddleware, appointmentController.deleteAppointment);
router.patch('/editAppointment', authMiddleware, appointmentController.editAppointment);

module.exports = router;