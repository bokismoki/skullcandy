const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 10
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', userSchema)