const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = async (req, res, next) => {
    const header = req.headers['authorization'];

    const token = header.split(', ')[1]

    if (typeof header !== 'undefined') {

        const decode = await jwt.decode(token, process.env.JWT_SECRET)

        if (decode && req.body.user_id) {
            if (decode.user_id === req.body.user_id) {
                next();
            } else {
                res.send({ err: 'Error while updating the cart' })
            }
        } else {
            res.send({ err: 'Error while updating the cart' })
        }

    } else {
        res.send({ err: 'Error while updating the cart' })
    }
}