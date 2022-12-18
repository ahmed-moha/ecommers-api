const { default: mongoose } = require("mongoose");

const ErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENVIROMMENT === "development") {
    console.error("Error: ", err);
  }

  if (err.message) err.statusCode = 400;

  if (err.name && err.name === "TokenExpiredError") {
    err.message = "Your session has been expired! Please, log back in";
  }

  // if (err.name && err.name === "ForbiddenError") {
  //   err.message = "You " + err.message;
  // }

  if (err.code && err.code === 11000) {
    err.statusCode = 409;
    err.message = `${JSON.stringify(err.keyValue)} already exists!`;
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Something went wrong!";

  return res
    .status(err.statusCode)
    .json({ status: err.status, message: err.message });
};

module.exports = ErrorHandler;
