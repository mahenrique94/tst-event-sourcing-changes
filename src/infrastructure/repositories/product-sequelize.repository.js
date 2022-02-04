class ProductSequelizeRepository {
  constructor({ model }) {
    this.model = model
  }

  add = data => {
    return this.model.create(data)
  }

  list = () => {
    return this.model.findAll()
  }

  get = id => {
    return this.model.findOne({ where: { id } })
  }

  update = data => {
    return this.model.update(data, { where: { id: data.id } })
  }

  remove = id => {
    return this.model.destroy({ where: { id } })
  }
}

module.exports = ProductSequelizeRepository
