const Cart = require('../models/Cart')

exports.get = async (req, res) => {
    try {
        const user_id = req.params.id
        const cart = await Cart.findOne({ user_id })
        if (cart) {
            res.send(cart)
        } else {
            res.send({ err: 'Error while getting the cart' })
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while getting the cart' })
    }
}

exports.updateQuantity = async (req, res) => {
    try {
        const user_id = req.params.id
        const { item, action } = req.body
        const cart = await Cart.findOne({ user_id })
        if (cart) {
            if (action === 'add') {
                cart.items.push(item)
                cart.save()
            } else if (action === '++') {
                // FIX
                cart.items[item].quantity += 1
                cart.save()
            } else if (action === '--') {
                // FIX
                cart.items[item].quantity -= 1
                cart.save()
            } else if (action === 'remove') {
                cart.items.splice(item, 1)
                cart.save()
            }
        } else {
            const cartInstance = new Cart({
                items: [item],
                user_id
            })
            const createdCart = await cartInstance.save()
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while updating the cart' })
    }
}