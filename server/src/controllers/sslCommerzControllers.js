const SSLCommerz = require("ssl-commerz-node");
const PaymentSession = SSLCommerz.PaymentSession;
const shortid = require("shortid");
const Order = require("../models/Order");
require("dotenv").config();

// For live payment set first parameter `false` and for sandbox set it `true`
const payment = new PaymentSession(
  true,
  process.env.SSLCOMMERZ_STORE_ID,
  process.env.SSLCOMMERZ_STORE_PASSWORD
);

exports.SSLCommerz_payment_init = async (req, res) => {
  // console.log(req.body);
  // console.log(req)

  const {
    cartItems,
    totalAmount,
    deliveryMethod,
    numItem,
    customerInfo,
    shippingInfo,
  } = req.body;

  const transactionId = `transaction_${shortid.generate()}`;
  let paymentDone = false;

  if (
    !(cartItems.length >= 0) ||
    !(totalAmount > 0) ||
    !(deliveryMethod.length > 0) ||
    !(numItem > 0) ||
    !customerInfo ||
    !shippingInfo
  ) {
    return res.json({ message: "All filled must be required" });
  } else {
    try {
      // Set the urls
      payment.setUrls({
        // success: "yoursite.com/success", // If payment Succeed
        success: `http://localhost:7001/api/payment/success?transactionId=${transactionId}`, // If payment Succeed
        fail: "yoursite.com/fail", // If payment failed
        cancel: "yoursite.com/cancel", // If user cancel payment
        ipn: "yoursite.com/ipn", // SSLCommerz will send http post request in this link
      });
      // Set order details
      payment.setOrderInfo({
        total_amount: 0.1, // Number field
        currency: "BDT", // Must be three character string
        tran_id: transactionId, // Unique Transaction id
        emi_option: 0, // 1 or 0
        multi_card_name: "internetbank", // Do not Use! If you do not customize the gateway list,
        allowed_bin: "371598,371599,376947,376948,376949", // Do not Use! If you do not control on transaction
        emi_max_inst_option: 3, // Max instalment Option
        emi_allow_only: 0, // Value is 1/0, if value is 1 then only EMI transaction is possible
      });

      // Set customer info
      payment.setCusInfo({
        name: "Simanta Paul",
        email: "simanta@bohubrihi.com",
        add1: "66/A Midtown",
        add2: "Andarkilla",
        city: "Chittagong",
        state: "Optional",
        postcode: 4000,
        country: "Bangladesh",
        phone: "010000000000",
        fax: "Customer_fax_id",
      });

      // Set shipping info
      payment.setShippingInfo({
        method: "Courier", //Shipping method of the order. Example: YES or NO or Courier
        num_item: 2,
        name: "Simanta Paul",
        add1: "66/A Midtown",
        add2: "Andarkilla",
        city: "Chittagong",
        state: "Optional",
        postcode: 4000,
        country: "Bangladesh",
      });

      // Set Product Profile
      payment.setProductInfo({
        product_name: "Computer",
        product_category: "Electronics",
        product_profile: "general",
      });

      // Initiate Payment and Get session key
      payment.paymentInit().then(async (response) => {
        // console.log(response);
        res.send(response["GatewayPageURL"]);
        // paymentDone = response["status"] === "SUCCESS";

        const newOrder = new Order({
          cartItems,
          totalAmount,
          deliveryMethod,
          numItem,
          customerInfo,
          shippingInfo,
          transactionId,
          // paymentDone,
        });
        const save = await newOrder.save();

      });
    } catch (err) {
      return res.status(400).json({ error });
    }
  }

  // res.status(200).json({message: 'info ok'})
};

// -------------------------------- After Success

// console.log(response['sessionkey']);
//     D37CD2C0A0D322991531D217E194F981

// console.log(response['GatewayPageURL']);
//     https://sandbox.sslcommerz.com/EasyCheckOut/testcded37cd2c0a0d322991531d217e194f981

// -------------------------------- After Failure (Wrong Store ID)

// console.log(response['status']);
//     FAILED

// console.log(response['failedreason']);
//     Store Credential Error Or Store is De-active
