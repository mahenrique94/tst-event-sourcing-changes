class ProductMongoRepository {
  constructor({ model }) {
    this.model = model
  }

  add = data => {
    return this.model.create(data)
  }

  listBy = id => {
    return this.model.find({ 'payload.id': id })
  }
}

module.exports = ProductMongoRepository
