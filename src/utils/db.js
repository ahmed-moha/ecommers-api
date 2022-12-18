const mongoose = require("mongoose");

const connection = () => {
  const url = process.env.DB_URL;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(url)
    .then(() => {
      console.log("😎 Connection succesfully connected 🔥✌");
    })
    .catch(console.error);
};

module.exports = connection;
