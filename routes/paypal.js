const router = require("express").Router();
const validation = require("../middleware/validation/paypal");
const controller = require("../controllers/paypal");

router.post("/paypal/subscriptions", validation, controller.create);

router.get("/paypal/subscription/:_id", controller.return);

router.put("/paypal/subscription/:_id", validation, controller.update);

router.delete("/paypal/subscriptions/:_id", controller.cancel);

module.exports = router;