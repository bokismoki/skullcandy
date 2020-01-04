const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/skullcandy',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) return console.log('Unable to connect to the database')
        console.log('Connected to the database')
    })