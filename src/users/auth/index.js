const User = require("../model");
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res
        .status(404)
        .json({ status: false, data: "username or password is missing" });
    }
    const data = await User.findOne({ username: username, password: password });
    console.log(username,password);
    if (!data) {
      return res
        .status(404)
        .json({ status: false, data: "Username or password is incorect" });
    }
    return res.status(200).json({ status: true, data: data });
  } catch (e) {
    next(e);
  }
};
