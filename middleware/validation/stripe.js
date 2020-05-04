const { body, validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    const errors = validationResult(req);

    body("name", "Name received an invalid input")
    .exists().withMessage("Name is a required field")
    .trim()
    .escape();

    body("email", "Email received an invalid input")
    .exists().withMessage("Email is a required field")
    .isEmail().withMessage("Email must be a valid email address")
    .trim()
    .escape()
    .normalizeEmail();

    body("phone", "Phone received an invalid input")
    .exists().withMessage("Phone is a required field")
    .trim()
    .escape();

    if(!errors.isEmpty()) return res.status(400).json(errors.msg);

    return next();
};