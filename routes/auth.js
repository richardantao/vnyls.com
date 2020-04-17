const router = require("express").Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation/auth");
const controller = require("../controllers/auth");

router.post("/users", validation.register, controller.register);

router.get("/users/:_id", auth, controller.user);

router.delete("/users/:_id", auth, controller.deactivate);

router.put("/users/:_id/jwt", validation.login, controller.login);

router.delete("/users/:_id/jwt", auth, controller.logout);

module.exports = router;