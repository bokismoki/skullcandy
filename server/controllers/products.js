const products = require('../products.json')

exports.getAll = (req, res) => {
    res.send(products)
}