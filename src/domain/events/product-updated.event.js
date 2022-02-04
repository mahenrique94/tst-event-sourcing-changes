const { events } = require('.')

class ProductUpdatedEvent {
  constructor(product) {
    this.createdAt = new Date()
    this.payload = product.toData()
    this.type = events.PRODUCT_UPDATED
  }

  toData() {
    return {
      createdAt: this.createdAt,
      payload: this.payload,
      type: this.type,
    }
  }
}

module.exports = ProductUpdatedEvent
