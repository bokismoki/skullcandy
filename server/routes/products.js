const router = require('express').Router()

const productsController = require('../controllers/products')

router.get('/get', productsController.getAll)

module.exports = router