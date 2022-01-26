const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '10m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '5h'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId});
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken});
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({refreshToken});
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({refreshToken});
        return tokenData;
    }

    async validateAccessToken(token) {
        console.log('userData')
        try {
            console.log('userData')
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            console.log('userData', userData)
            return userData;
        } catch (error) {
            return null;
        }
    }

    async validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }
}

module.exports = new TokenService()