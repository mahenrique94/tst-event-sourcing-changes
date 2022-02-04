const uuid = require('uuid')

const { events } = require('.')

class ProductCreatedEvent {
  constructor(product) {
    this.createdAt = new Date()
    this.payload = {
      ...product.toData(),
      id: uuid.v4(),
    }
    this.type = events.PRODUCT_CREATED
  }

  toData() {
    return {
      createdAt: this.createdAt,
      payload: this.payload,
      type: this.type,
    }
  }
}

module.exports = ProductCreatedEvent
