const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  product_name: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  p_image: {
    type: String
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Products", productSchema);
