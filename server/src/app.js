const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// database connection
const database = require("./configs/db");
database();

// import routers
const sslCommerzRoutes = require("./routes/sslCommerzRoutes");



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/payment", sslCommerzRoutes);
app.post("/api/payment/success", (req, res) => {
  // console.log(req.query)
  // console.log(req.query.transactionId)
  res.redirect(`http://localhost:3000/checkout/${req.query.transactionId}`)
  // res.json({req})
});

// Run Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
