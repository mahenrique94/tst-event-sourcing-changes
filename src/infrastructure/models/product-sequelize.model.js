const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  database: 'tst_event_sourcing',
  host: 'localhost',
  port: 3306,
})

const ProductSequelizeModel = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(120),
    sales: DataTypes.BOOLEAN,
  },
  category: {
    type: DataTypes.STRING(60),
  },
  sku: {
    type: DataTypes.STRING(12),
  },
  sale: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, { underscored: true })

ProductSequelizeModel.sync()

module.exports = ProductSequelizeModel
