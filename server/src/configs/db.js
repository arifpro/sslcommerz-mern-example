const mongoose = require("mongoose");
require("dotenv").config();

let DB_URL;
if (process.env.DB_MODE === "development") {
  DB_URL = process.env.DB_URL_DEV;
} else if (process.env.DB_MODE === "production") {
  DB_URL = process.env.DB_URL_PRODUCTION;
}

const database = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() =>
      console.log(`Database connected in ${process.env.DB_MODE} mode`)
    )
    .catch((err) => console.log(err.message));
};

module.exports = database;
