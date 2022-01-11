const ApiError = require('../exceptions/api-error')

module.exports  = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).send({message: err.message, errors: err.errors})
    }
    return res.status(500).send({message: 'Непредвиденная ошибка'})
}