const ApiError = require('../exceptions/api-error');
const tokenService = require('../services/token-service');

module.exports  = (err, req, res, next) => {
    try {
        const authorizationHeaders = req.headers.authorization;
        if (!authorizationHeaders) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeaders.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        req.user = userData;
        console.log('hey')
        next()
    } catch (error) {
        return next(ApiError.UnauthorizedError());
    }
}