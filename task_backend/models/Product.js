const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

// Model name is used as collection name in pluralized, lowercase format
module.exports = mongoose.model('Product', productSchema);