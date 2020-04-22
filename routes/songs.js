const router = require("express").Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/songs");

router.get("/songs", auth, controller);

module.exports = router;