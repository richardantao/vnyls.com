const router = require("express").Router();
const controller = require("../controllers/paypal");

router.post("/paypal/subscriptions", controller.create);

router.get("/paypal/subscription/:_id", controller.return);

router.put("/paypal/subscription/:_id", controller.update);

router.delete("/paypal/subscriptions/:_id", controller.cancel);

module.exports = router;