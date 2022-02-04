const { events } = require('.')

class ProductRemovedEvent {
  constructor(id) {
    this.createdAt = new Date()
    this.payload = { id }
    this.type = events.PRODUCT_REMOVED
  }

  toData() {
    return {
      createdAt: this.createdAt,
      payload: this.payload,
      type: this.type,
    }
  }
}

module.exports = ProductRemovedEvent
