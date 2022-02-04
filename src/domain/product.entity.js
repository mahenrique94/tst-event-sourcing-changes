class Product {
  constructor({ id, name, category, sale = false, sku }) {
    this._name = name
    this._category = category
    this._sale = sale
    this._sku = sku
    this._id = id
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get category() {
    return this._category
  }

  get sale() {
    return this._sale
  }

  get sku() {
    return this._sku
  }

  toData() {
    return {
      name: this.name,
      category: this.category,
      id: this.id,
      sale: this.sale,
      sku: this.sku,
    }
  }
}

module.exports = Product
