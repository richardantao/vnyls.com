/* --- Dependencies --- */
require("dotenv").config();
const express = require("express");
const { join } = require("path");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const xss = require("xss-clean");

/* --- Configuration --- */
const app = express();
const port = process.env.PORT || 3001;
require("./config/db");

/* --- Middleware --- */
app.use(helmet());
app.use(cors({
    origin: [
        "https://vnyls.com/",
        "https://www.vnyls.com/",
        "http://localhost:3000"
    ],
    credentials: true
    })
);
app.use(cookieParser());
app.use(xss());
app.use(express.json());
app.use(express.static(join(__dirname, "./views/build")));

/* --- Routes --- */
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/errors"));
app.use("/api", require("./routes/payments"));
app.use("/api", require("./routes/songs"));

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "./views/build/index.html"));
});

/* --- Bootup --- */
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;