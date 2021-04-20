const mongoose = require("mongoose");
// const shortid = require("shortid");

const orderSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      // default: shortid.generate,
    },
    cartItems: {
      type: Array,
      default: [],
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    deliveryMethod: {
      type: String,
      default: "",
    },
    numItem: {
      type: Number,
      default: 0,
    },
    transactionId: {
      type: String,
      required: true,
    },
    paymentDone: {
      type: Boolean,
      default: false,
    },
    customerInfo: {
      type: Object,
      default: {
        cusName: "",
        cusEmail: "",
        cusAdd1: "",
        cusAdd2: "",
        cusCity: "",
        cusState: "",
        cusPostcode: "",
        cusCountry: "Bangladesh",
        cusPhone: "",
        cusFax: "",
      },
    },
    shippingInfo: {
      type: Object,
      default: {
        name: "",
        shippingAdd1: "",
        shippingAdd2: "",
        shippingCity: "",
        shippingState: "",
        shippingPostcode: "",
        shippingCountry: "Bangladesh",
        cusPhone: "",
      },
    },
    // cusName: {
    //   type: String,
    //   required: true,
    // },
    // cusEmail: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   // index: { unique: true },
    //   match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    // },
    // cusAdd1: {
    //   type: String,
    //   required: true,
    // },
    // cusAdd2: {
    //   type: String,
    //   required: true,
    // },
    // cusCity: {
    //   type: String,
    //   required: true,
    // },
    // cusState: {
    //   type: String,
    //   required: true,
    // },
    // cusPostcode: {
    //   type: String,
    //   required: true,
    // },
    // cusCountry: {
    //   type: String,
    //   default: "Bangladesh",
    // },
    // cusPhone: {
    //   type: String,
    //   required: true,
    // },
    // cusFax: {
    //   type: String,
    //   required: true,
    // },
    
    // shippingName: {
    //   type: String,
    //   required: true,
    // },
    // shippingAdd1: {
    //   type: String,
    //   required: true,
    // },
    // shippingAdd2: {
    //   type: String,
    //   required: true,
    // },
    // shippingCity: {
    //   type: String,
    //   required: true,
    // },
    // shippingState: {
    //   type: String,
    //   required: true,
    // },
    // shippingPostcode: {
    //   type: String,
    //   required: true,
    // },
    // shippingCountry: {
    //   type: String,
    //   default: "Bangladesh",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
