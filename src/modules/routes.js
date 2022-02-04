const ROUTES = {
  'GET /': 'controllers.home#index',
  'GET /products': 'controllers.product#list',
  'GET /products/form': 'controllers.product#form',
  'GET /products/:id': 'controllers.product#edit',
  'POST /products': 'controllers.product#create',
  'PUT /products': 'controllers.product#update',
  'DELETE /products/:id': 'controllers.product#remove',
}

module.exports.registerRoutes = (container, server) => {
  Object.entries(ROUTES).forEach(([route, handler]) => {
    const [verb, path] = route.split(' ')
    const [meta, method] = handler.split('#')
    const [namespace, controller] = meta.split('.')

    server[verb.toLowerCase()](path, container.get(namespace).get(controller)[method])
  })
}
