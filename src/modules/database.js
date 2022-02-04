const mongoose = require('mongoose')

module.exports.registerDatabases = async container => {
  await mongoose.connect(`mongodb://${container.get('env').db.nosql.host}:${container.get('env').db.nosql.port}/${container.get('env').db.nosql.name}`, {
    authSource: 'admin',
    user: container.get('env').db.nosql.user,
    pass: container.get('env').db.nosql.password,
  })
}
