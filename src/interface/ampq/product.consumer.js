const { events } = require('../../domain/events')

class ProductConsumer {
  constructor({ repository }) {
    this.repository = repository
  }

  handle = async (event) => {
    switch (event.type) {
      case events.PRODUCT_CREATED: {
        await this.repository.add({
          id: event.payload.id,
          name: event.payload.name,
          category: event.payload.category,
          sale: event.payload.sale,
          sku: event.payload.sku,
        })
        break
      }

      case events.PRODUCT_UPDATED: {
        await this.repository.update({
          id: event.payload.id,
          name: event.payload.name,
          category: event.payload.category,
          sale: event.payload.sale,
          sku: event.payload.sku,
        })
        break
      }

      case events.PRODUCT_REMOVED: {
        await this.repository.remove(event.payload.id)
      }

      default:
        break
    }
  }
}

module.exports = ProductConsumer
