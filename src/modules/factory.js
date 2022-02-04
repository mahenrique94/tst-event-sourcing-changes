const Container = require('./container')
const env = require('./env')

const HomeController = require('../interface/http/home.controller')
const ProductController = require('../interface/http/product.controller')
const ProductConsumer = require('../interface/ampq/product.consumer')

const ProductService = require('../application/product.service')

const ProductChannel = require('../infrastructure/channels/product.channel')
const ProductMongoModel = require('../infrastructure/models/product-mongo.model')
const ProductSequelizeModel = require('../infrastructure/models/product-sequelize.model')
const ProductMongoRepository = require('../infrastructure/repositories/product-mongo.repository')
const ProductSequelizeRepository = require('../infrastructure/repositories/product-sequelize.repository')

module.exports.createContainer = () => {
  const container = new Container()

  const productChannel = new ProductChannel({ container })
  const productSequelizeRepository = new ProductSequelizeRepository({ model: ProductSequelizeModel })
  const productRepositoryMongo = new ProductMongoRepository({ model: ProductMongoModel })
  const productService = new ProductService({
    channel: productChannel,
    repositoryMongo: productRepositoryMongo,
    repositorySequelize: productSequelizeRepository,
  })

  container.register('home', new HomeController(), 'controllers')
  container.register('product', new ProductController({ service: productService }), 'controllers')

  container.register('product', new ProductConsumer({ repository: productSequelizeRepository }), 'consumers')

  container.register('product', productChannel, 'channels')

  container.register('env', env)

  return container
}
