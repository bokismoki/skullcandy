const jwt = require('jsonwebtoken')

require('dotenv').config()

module.exports = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization']
        const cookiesHeader = req.headers['cookie']

        if (typeof authorizationHeader !== 'undefined' && typeof cookiesHeader !== 'undefined') {

            const authorizationToken = authorizationHeader.split(', ')[1]
            const cookieToken = cookiesHeader.split('; ').find(header => header.includes('auth._token.local=')).split('=')[1]

            const authorizationDecode = await jwt.verify(authorizationToken, process.env.JWT_SECRET)
            const cookieDecode = await jwt.verify(cookieToken, process.env.JWT_SECRET)

            if (authorizationDecode && cookieDecode && req.body.user_id) {
                if (authorizationDecode.user_id === req.body.user_id && cookieDecode.user_id === req.body.user_id) {
                    next()
                } else {
                    throw 'Error while updating the cart, logging out...'
                }
            } else {
                throw 'Error while updating the cart, logging out...'
            }

        } else {
            throw 'Error while updating the cart, logging out...'
        }
    } catch (err) {
        res.send({ err, authorizationError: true })
    }
}