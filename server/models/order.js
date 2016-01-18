var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  qty: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('Order', OrderSchema);