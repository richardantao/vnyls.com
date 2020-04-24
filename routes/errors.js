const router = require("express").Router();
const controller = require("../controllers/errors");

router.post("/errors", controller);

module.exports = router;