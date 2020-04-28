require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.AUTH_SECRET;

module.exports = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return res.status(401).json({ message: "Missing token, authorization denied" });

    try {
        req.user = jwt.verify(token, secret);

        return next();
    } catch (err) {
        res.clearCookie("access_token");
        return res.status(400).json({ message: "Token is not valid" });
    };
};