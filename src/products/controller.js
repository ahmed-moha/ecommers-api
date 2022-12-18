const base = require("../utils/base");
const Product = require("./model");
exports.createProduct = base.createOne(Product);
exports.getProduct = base.getOne(Product);
exports.getProducts = base.getAll(Product);
exports.deleteProduct = base.deleteOne(Product);
exports.updateProduct = base.updateOne(Product);
exports.getProductByCategory = async (req, res, next) => {
  try {
    const data = await Product.find({ categoryId: req.body.id });
    res.status(200).json({ success: true, data: data });
  } catch (e) {
    next(e);
  }
};
