var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: { type: String, required:true },
  qty: { type: Number, required:true, default:0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('Product', ProductSchema);