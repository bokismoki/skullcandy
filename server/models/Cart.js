const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    items: {
        type: Array,
        default: []
    },
    user_id: {
        type: String
    }
})

module.exports = mongoose.model('Cart', cartSchema)