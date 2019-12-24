const router = require('express').Router()

const userController = require('../controllers/user')

router.post('/signup', userController.signup)

router.post('/signin', userController.signin)

router.get('/get', userController.get)

router.delete('/delete/:id', userController.delete)

module.exports = router