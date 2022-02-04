const { registerConsumers } = require('./consumers')
const { registerDatabases } = require('./database')
const { createContainer } = require('./factory')
const { registerRoutes } = require('./routes')
const { createServer } = require('./server')

module.exports = async () => {
  const container = createContainer()
  const server = createServer()

  await registerConsumers(container)
  await registerDatabases(container)
  await registerRoutes(container, server)

  await server.listen(container.get('env').api.port, container.get('env').api.host, () => {
    console.log(`Server running at http://${container.get('env').api.host}:${container.get('env').api.port}`)
    console.log('To stop it press CTRL+C')
  })
}
