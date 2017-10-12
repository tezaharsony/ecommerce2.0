var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/shopt');

// create a schema
var customersSchema = new Schema({
  username: String,
  password: String
});

// the schema is useless so far
// we need to create a model using it
var customers = mongoose.model('customers', customersSchema);

// make this available to our users in our Node applications
module.exports = customers;
