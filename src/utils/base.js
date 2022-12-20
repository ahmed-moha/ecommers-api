const { deleteFile } = require("./helper");

exports.createOne = (modal) => async (req, res, next) => {
  try {
    console.log(req.body);
    const data = await modal.create(req.body);
    res.status(200).json({ status: true, data: data });
  } catch (e) {
    next(e);
    deleteFile(req.images);
  }
};
exports.getAll = (model) => async (req, res, next) => {
  try {
    const data = await model.find();
    res.status(200).json({ status: true, data: data });
  } catch (e) {
    next(e);
  }
};

exports.getOne = (model) => async (req, res, next) => {
  console.log(req.params.id);
  try {
    const data = await model.findById(req.params.id);
    res.status(200).json({ status: true, data: data });
  } catch (e) {
    next(e);
  }
};

exports.updateOne = (model) => async (req, res, next) => {
  try {
    const data = await model.findByIdAndUpdate(req.params.id, req.body);
    if (data) {
      return res.status(200).json({ status: true, data: data });
    }
    res
      .status(400)
      .json({ status: false, data: "Oops no product of this id is found" });
  } catch (e) {
    next(e);
  }
};
exports.deleteOne = (model) => async (req, res, next) => {
  try {
    const data = await model.findOneAndDelete(req.params.id);
    res.status(200).json({ status: true, data: data });
  } catch (e) {
    next(e);
  }
};
