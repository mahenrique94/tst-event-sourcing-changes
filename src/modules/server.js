const express = require('express')
const methodOverride = require('method-override')
const path = require('path')

module.exports.createServer = () => {
  const app = express()

  app.use(express.urlencoded())
  app.use(methodOverride('_method'))
  app.use(express.static(path.resolve(__dirname, '..', 'views', 'public')))

  app.set('view engine', 'pug')
  app.set('views', path.resolve(__dirname, '..', 'views'))

  return app
}
