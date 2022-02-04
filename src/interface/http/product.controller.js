class ProductController {
  constructor({ service }) {
    this.service = service
  }

  create = async (req, res) => {
    await this.service.create(req.body)
    return res.redirect('/products')
  }

  form = (_, res) => {
    return res.render('product/form', { product: {} })
  }

  list = async (_, res) => {
    const products = await this.service.list()
    return res.render('product/list', { products })
  }

  edit = async (req, res) => {
    const product = await this.service.get(req.params.id)
    const events = await this.service.getEvents(req.params.id)
    return res.render('product/form', { product, events })
  }

  update = async (req, res) => {
    await this.service.update(req.body)
    return res.redirect('/products')
  }

  remove = async (req, res) => {
    await this.service.remove(req.params.id)
    return res.redirect('/products')
  }
}

module.exports = ProductController
