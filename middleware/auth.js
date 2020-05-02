require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.AUTH_SECRET;

module.exports = (req, res, next) => {
    const { accessToken } = req.signedCookies;

    if(!accessToken) return res.status(401).json({ message: "Missing token, access denied" });

    try {
        req.user = jwt.verify(accessToken, secret);

        return next();
    } catch (err) {
        res.clearCookie("accessToken");
        return res.status(400).json({ message: "Token is not valid" });
    };
};