var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/shopt');

// create a schema
var transactionsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref:'customers'
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref:'items'
  }]
});

// the schema is useless so far
// we need to create a model using it
var transactions = mongoose.model('transactions', transactionsSchema);

// make this available to our users in our Node applications
module.exports = transactions;
