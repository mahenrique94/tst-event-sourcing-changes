const mongoose = require('mongoose')

module.exports = mongoose.model('Product', new mongoose.Schema({
  type: mongoose.Schema.Types.String,
  payload: mongoose.Schema.Types.Mixed,
  createdAt: mongoose.Schema.Types.Date,
}))
