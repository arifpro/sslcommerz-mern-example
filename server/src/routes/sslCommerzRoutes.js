const express = require("express");
const router = express.Router();
const { SSLCommerz_payment_init } = require("../controllers/sslCommerzControllers");

router.post("/checkout", SSLCommerz_payment_init);

module.exports = router;
