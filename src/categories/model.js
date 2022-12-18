const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true
    },
    desc:{
        type:String,
        default:"no description at all"
    },
    photo: {
      type: String,
      default: "no-image",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false, strict: true }
);

module.exports = mongoose.model("Category", CategorySchema);
