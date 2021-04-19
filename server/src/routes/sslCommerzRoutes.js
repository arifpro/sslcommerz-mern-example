const express = require("express");
const router = express.Router();
const { SSLCommerz_payment_init } = require("../controllers/sslCommerzControllers");

router.get("/checkout", SSLCommerz_payment_init);

module.exports = router;
