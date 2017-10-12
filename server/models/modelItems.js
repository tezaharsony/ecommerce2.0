var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/shopt');

// create a schema
var itemSchema = new Schema({
  name: String,
  price: Number,
  imageurl: String,
  desc: String,
  stock: Number,
  categoryid: Number
});

// the schema is useless so far
// we need to create a model using it
var items = mongoose.model('items', itemSchema);

// make this available to our users in our Node applications
module.exports = items;
