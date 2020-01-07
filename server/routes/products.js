const router = require('express').Router()

const productsController = require('../controllers/products')

router.get('/get', productsController.getAll)

router.get('/get/:id', productsController.getOne)

module.exports = router