const router = require("express").Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation/auth");
const controller = require("../controllers/auth");

router.post("/users", validation.register, controller.register);

router.get("/users", auth, controller.user);

router.delete("/users", auth, controller.terminate);

router.put("/users/authentication", validation.login, controller.login);

router.delete("/users/authentication", auth, controller.logout);

module.exports = router;