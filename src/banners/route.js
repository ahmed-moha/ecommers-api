const express = require("express");
const { uploadFile } = require("../utils/helper");

const route = express.Router();

const {
  createBanner,
  getBanner,
  getBanners,
  deleteBanner,
  updateBanner,
} = require("./controller");

route.get("/", getBanners);
route.post("/", uploadFile, createBanner);

route.get("/:id", getBanner);
route.patch("/:id", uploadFile, updateBanner);
route.delete("/:id", deleteBanner);

module.exports = route;
