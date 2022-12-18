const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    productId: [
      {
        type: mongoose.mongo.ObjectId,
        ref: "Product",
        required: [true, "product id is required"],
      },
    ],
    phone: {
      type: Number,
      required: [true, "Phone is required"],
    
    },
    method: {
      type: String,
      enum: ["EVC", "CASH"],
      required: [true, "Method is required"],
    },
    user: {
      type: mongoose.mongo.ObjectId,
      ref: "user",
      required: [true, "User id is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: true }
);

module.exports = mongoose.model("Order", OrderSchema);
