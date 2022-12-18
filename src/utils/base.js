exports.createOne = (modal) => async (req, res, next) => {
  try {
    const data = await modal.create({ ...req.body, photos: req.images });
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    next(e);
  }
};
exports.getAll = (model) => async (req, res, next) => {
  try {
    const data = await model.find();
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    next(e);
  }
};

exports.getOne = (model) => async (req, res, next) => {
  console.log(req.params.id);
  try {
    const data = await model.findById(req.params.id);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    next(e);
  }
};

exports.updateOne = (model) => async (req, res, next) => {
  try {
    const data = await model.findByIdAndUpdate(req.params.id, req.body);
    if (data) {
      return res.status(200).json({ status: "success", data: data });
    }
    res.status(400).json({ status: "error", data: "Oops no product of this id is found" });
  } catch (e) {
    next(e);
  }
};
exports.deleteOne = (model) => async (req, res, next) => {
  try {
    const data = await model.findOneAndDelete(req.params.id);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    next(e);
  }
};
