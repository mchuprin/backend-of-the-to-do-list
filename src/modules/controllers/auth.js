const User = require ('../models/user');
const userService = require('../services/user-service');

module.exports.getAllClients = (req, res, next) => {
    User.find().then(result => {
        res.send(result);
    });
};

module.exports.registration = async (req, res, next) => {
    try {
        const {login, password} = req.body;
        const userData = await userService.registration(login, password);
        await res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true})
        return res.send(userData);
    } catch (e) {
        next(e);
    }
};

module.exports.authorization = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

module.exports.logout = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};
    
module.exports.refreshJWT = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

