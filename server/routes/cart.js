const router = require('express').Router()

const cartController = require('../controllers/cart')

router.get('/get/:id', cartController.get)

router.post('/updateQuantity/:id', cartController.updateQuantity)

module.exports = router