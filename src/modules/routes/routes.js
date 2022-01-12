const express = require('express');
const userController = require('../controllers/auth');
const router = express.Router();

router.get('/allClients' ,userController.getAllClients);
router.post('/registration', userController.registration);
router.post('/authorization', userController.authorization);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);

module.exports = router;