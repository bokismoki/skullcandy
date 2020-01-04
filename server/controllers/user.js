const User = require('../models/User')
const Cart = require('../models/Cart')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body
        const isEmailUsed = await User.findOne({ email })
        if (isEmailUsed) {
            res.send({ err: 'Error while registering a new user' })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const userInstance = new User({
                email,
                password: hashedPassword
            })
            const createdUser = await userInstance.save()
            res.status(201).send({ msg: 'New user successfully registered' })
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while registering a new user' })
    }
}

exports.get = async (req, res) => {
    try {
        const tokenIsValid = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        if (tokenIsValid) {
            const user = await User.findOne({ _id: tokenIsValid.user_id })
            res.send({ user_id: user._id, created_at: user.created_at, email: user.email })
        } else {
            res.send({ err: 'Invalid token' })
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while getting the user info' })
    }
}

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body
        const isEmailUsed = await User.findOne({ email })
        if (isEmailUsed) {
            const isValidPassword = await bcrypt.compare(password, isEmailUsed.password)
            if (isValidPassword) {
                const token = await jwt.sign({ user_id: isEmailUsed._id }, process.env.JWT_SECRET)
                res.send({ msg: 'Successfully signed in', token })
            } else {
                res.send({ err: 'Error while signing in' })
            }
        } else {
            res.send({ err: 'Error while signing in' })
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while signing in' })
    }
}

exports.delete = async (req, res) => {
    try {
        const user_id = req.params.id
        const isValidID = await User.findOne({ _id: user_id })
        if (isValidID) {
            const deletedUser = await User.findByIdAndDelete({ _id: user_id })
            const usersCart = await Cart.findOneAndDelete({ user_id })
            res.send({ msg: 'User successfully deleted' })
        } else {
            res.send({ err: 'Error while deleting the user' })
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while deleting the user' })
    }
}