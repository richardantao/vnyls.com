const router = require("express").Router();
const controller = require("../controllers/paypal");

router.post("/payments/stripe", controller.payment);

router.get("/payments/stripe", controller.key);

router.post("/payments/paypal", controller.create);

router.get("/payments/paypal", controller.execute);

module.exports = router;