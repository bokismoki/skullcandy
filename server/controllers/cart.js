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
        const { item, action, index } = req.body
        const cart = await Cart.findOne({ user_id })
        if (cart) {
            if (action === 'add') {
                cart.items.push(item)
                await cart.save()
                res.send({ msg: 'Successfully added new item to the cart' })
            } else if (action === '++') {
                const cart = await Cart.findOneAndUpdate({ user_id }, { $inc: { [`items.${index}.quantity`]: 1 } })
                res.send({ msg: 'Successfully updated cart' })
            } else if (action === '--') {
                const cart = await Cart.findOneAndUpdate({ user_id }, { $inc: { [`items.${index}.quantity`]: -1 } })
                res.send({ msg: 'Successfully updated cart' })
            } else if (action === 'remove') {
                cart.items.splice(item, 1)
                await cart.save()
                res.send({ msg: 'Successfully removed the item from the cart' })
            }
        } else {
            const cartInstance = new Cart({
                items: [item],
                user_id
            })
            const createdCart = await cartInstance.save()
            res.send({ msg: 'Successfully created cart' })
        }
    } catch (err) {
        console.error(err)
        res.send({ err: 'Error while updating the cart' })
    }
}