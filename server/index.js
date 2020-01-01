const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Database
require('./db/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

// Routes
const userRoutes = require('./routes/user')
app.use('/api/user', userRoutes)

const productsRoutes = require('./routes/products')
app.use('/api/products', productsRoutes)

const cartRoutes = require('./routes/cart')
app.use('/api/cart', cartRoutes)