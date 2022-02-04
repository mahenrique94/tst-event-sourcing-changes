const Product = require('../domain/product.entity')
const ProductCreatedEvent = require('../domain/events/product-created.event')
const ProductUpdatedEvent = require('../domain/events/product-updated.event')
const ProductRemovedEvent = require('../domain/events/product-removed.event')

class ProductService {
  constructor({ channel, repositoryMongo, repositorySequelize }) {
    this.channel = channel
    this.repositoryMongo = repositoryMongo
    this.repositorySequelize = repositorySequelize
  }

  create = async data => {
    const product = new Product(data)
    const event = new ProductCreatedEvent(product)
    await this.repositoryMongo.add(event.toData())
    await this.channel.emit(event.toData())
  }

  list = () => {
    return this.repositorySequelize.list()  
  }

  get = id => {
    return this.repositorySequelize.get(id)
  }

  update = async data => {
    const product = new Product(data)
    const event = new ProductUpdatedEvent(product)
    await this.repositoryMongo.add(event.toData())
    await this.channel.emit(event.toData())
  }

  remove = async id => {
    const event = new ProductRemovedEvent(id)
    await this.repositoryMongo.add(event.toData())
    await this.channel.emit(event.toData())
  }

  getEvents = async id => {
    return this.repositoryMongo.listBy(id)
  }
}

module.exports = ProductService
