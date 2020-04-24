const router = require("express").Router();
const controller = require("../controllers/payments");

router.post("/stripe/subscriptions", controller.createStripeSubscription);

router.post("/stripe/subscriptions/:_id", controller.deleteStripeSubscription);

router.get("/stripe/keys", controller.stripeKey);

router.post("paypal/subscriptions", controller.createPaypalSubscription);

router.get("/paypal/subscriptions/:_id", controller.deletePaypalSubscription);

module.exports = router;