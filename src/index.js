const express = require("express");
const ErrorHandler = require("./utils/error");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.static(__dirname + "/public"));

// Banners Route
const bannerRouter = require("./banners/route");
app.use("/api/v1/banners", bannerRouter);

// Users Route
const userRouter = require("./users/route");
app.use("/api/v1/users", userRouter);

// Category Route
const categoryRouter = require("./categories/route");
app.use("/api/v1/categories", categoryRouter);

// Product Route
const productRouter = require("./products/route");
app.use("/api/v1/products", productRouter);

// Order Route
const orderRouter =require("./orders/route");
app.use("/api/v1/orders", orderRouter);

app.use(ErrorHandler);
app.use(fileUpload());
app.listen(process.env.PORT);
