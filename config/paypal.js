const paypal = require("paypal-rest-sdk");

module.exports = paypal.configure({
    "mode": process.env.PAYPAL_ENV,
    "client_id": process.env.PAYPAL_CLIENT_ID,
    "client_secret": process.env.PAYPAL_CLIENT_SECRET
});