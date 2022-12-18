const base = require("../utils/base");
const Category = require("./model");
exports.createCategory = base.createOne(Category);
exports.updateCategory = base.updateOne(Category);
exports.getCategory = base.getOne(Category);
exports.getCategories = base.getAll(Category);
exports.deleteCategory = base.deleteOne(Category);
