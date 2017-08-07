const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  price: String,
  brand: String
});

module.exports = mongoose.model('Item', itemSchema);