const mongoose = require('mongoose')

require('dotenv').config()

module.exports = mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) return console.log('Unable to connect to the database')
        console.log('Connected to the database')
    })