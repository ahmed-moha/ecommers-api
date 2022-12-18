const base = require("../utils/base");
const Banner = require("./model");
exports.createBanner = base.createOne(Banner);
exports.deleteBanner = base.deleteOne(Banner);
exports.updateBanner = base.updateOne(Banner);
exports.getBanner = base.getOne(Banner);
exports.getBanners = base.getAll(Banner);
