const router = require("express").Router();
const controller = require("../controllers/stripe");

router.post("/stripe/subscriptions", controller.createSubscription);

router.get("/stripe/subscriptions/:_id", controller.retrieveSubscription);

router.put("/stripe/subscriptions/:_id", controller.updateSubscription);

router.delete("/stripe/subscriptions/:_id", controller.deleteSubscription);

router.get("/stripe/keys", controller.fetchKey);

module.exports = router;