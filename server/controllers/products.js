const products = require('../products.json')

exports.getAll = (req, res) => {
    res.send(products)
}

exports.getOne = (req, res) => {
    const _id = req.params.id
    const product = products.find(product => product._id == _id)
    if (product) {
        res.send(product)
    } else {
        res.send({ err: 'Error while getting the product' })
    }
}