const express = require("express");
const router = express.Router();
const {
    SSLCommerz_payment_init,
    SSLCommerz_payment_success,
    SSLCommerz_payment_fail,
    SSLCommerz_payment_cancel,
} = require("../controllers/sslCommerzControllers");

router.post("/checkout", SSLCommerz_payment_init);
router.post("/checkout/success", SSLCommerz_payment_success);
router.post("/checkout/fail", SSLCommerz_payment_fail);
router.post("/checkout/cancel", SSLCommerz_payment_cancel);

module.exports = router;
