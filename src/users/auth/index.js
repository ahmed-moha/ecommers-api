const User = require("../model");
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log("tiger", username);
    if (!username || !password) {
      return res
        .status(404)
        .json({ status: "error", data: "username or password is missing" });
    }
    const data = await User.findOne({ username: username, password: password });
    console.log(data);
    if (!data) {
      return res
        .status(404)
        .json({ status: "error", data: "Username or password is incorect" });
    }
    return res.status(200).json({ status: "success", data: data });
  } catch (e) {
    next(e);
  }
};
