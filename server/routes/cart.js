const router = require('express').Router()

const cartController = require('../controllers/cart')

const authorization = require('./authorization')

router.get('/get/:id', cartController.get)

router.post('/updateQuantity/:id', authorization, cartController.updateQuantity)

module.exports = router