const mongoose = require("mongoose");
const BannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      unique: true,
      max: 150,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      max: 500,
    },
    photos: [{ type: String, default: "no-image.jpg" }],
    createdBy: {
      ref: "Users",
      type: mongoose.mongo.ObjectId,

      required: [false, "User is required to create banner 😁"],
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

BannerSchema.pre("save", async function (next) {
  this.updatedAt = Date.now;
  next();
});

module.exports = mongoose.model("Banner", BannerSchema);
