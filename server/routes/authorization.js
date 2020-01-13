const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = async (req, res, next) => {
    const authorizationHeader = req.headers['authorization']
    const cookiesHeader = req.headers['cookie']

    const authorizationToken = authorizationHeader.split(', ')[1]
    const cookieToken = cookiesHeader.split('; ')[1].split('=')[1]
    console.log(cookiesHeader)
    console.log(cookieToken)

    if (typeof authorizationHeader !== 'undefined') {

        const authorizationDecode = await jwt.decode(authorizationToken, process.env.JWT_SECRET)
        const cookieDecode = await jwt.decode(cookieToken, process.env.JWT_SECRET)

        if (authorizationDecode && cookieDecode && req.body.user_id) {
            if (authorizationDecode.user_id === req.body.user_id && cookieDecode.user_id === req.body.user_id) {
                next()
            } else {
                res.send({ err: 'Error while updating the cart, logging out...', authorizationError: true })
            }
        } else {
            res.send({ err: 'Error while updating the cart, logging out...', authorizationError: true })
        }

    } else {
        res.send({ err: 'Error while updating the cart, logging out...', authorizationError: true })
    }
}