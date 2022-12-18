const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is requied"],
    unique: true
  },
  desc: {
    type: String,
    default: "High Quality Product",
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  photos: [{ type: String, default: "no-image" }],
  quantity: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: mongoose.mongo.ObjectId,
    ref: "Categories",
    required: [true, "Category id is required"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
