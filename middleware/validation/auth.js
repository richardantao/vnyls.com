const { body, validationResult } = require("express-validator");

exports.register = (req, res) => {
    const errors = validationResult(req);
    const { first, last, email, password } = req.body;

    body(first, "First Name received an invalid input")
        .exists().withMessage("First Name is a required field")
        .escape();
    
    body(last, "Last Name received an invalid input")
        .exists().withMessage("Last Name is a required field")
        .escape();

    body(email, "Email received an invalid input")
        .exists().withMessage("Email is a required field")
        .isEmail().withMessage("Email must be a valid email address")
        .escape()
        .normalizeEmail();

    body(password, "Password received an invalid input")
        .exists().withMessage("Password is a required field")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
        .escape();

    if(!errors.isEmpty()) return res.status(400).json({ message: errors.msg });

    return next();
};

exports.login = (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    body(email).escape();
    body(password).escape();

    if(!errors.isEmpty()) return res.status(400).json({ message: errors.msg });

    return next();
};