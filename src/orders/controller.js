const base = require("../utils/base");
const Order = require("./model");
exports.createOrder = async(req,res,next) => {
  try {
    const data = await Order.create(req.body);
    if(data){
        res.status(200).json({ status: "success", data: data });
    }
  } catch (e) {
    next(e);
  }
};
exports.getOrder = async (req, res, next) => {
  try {
    const data = await Order.find({ user: req.params.id })
      .populate("user")
      .populate("productId");
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    next(e);
  }
};
exports.getOrders = base.getAll(Order);
exports.updateOrder = base.updateOne(Order);
exports.deleteOrder = base.deleteOne(Order);
