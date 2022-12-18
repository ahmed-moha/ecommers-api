const base = require("../utils/base");
const User = require("./model");
exports.createUser = base.createOne(User);
exports.getUser = base.getOne(User);
exports.getUsers=base.getAll(User)
exports.updateUser = base.updateOne(User);
exports.deleteUser = base.deleteOne(User);
