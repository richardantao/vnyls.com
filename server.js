/* --- Dependencies --- */
require("dotenv").config();
const express = require("express");
const path = require("path");
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
        "https://vynls.com",
        'http://localhost:3000'
    ],
    credentials: true
    })
);
app.use(cookieParser());
app.use(xss());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./views/build")));

/* --- Routes --- */
app.use("/api", require("./routes/auth"));
app.use("/api/errors", require("./routes/errors"));
app.use("/api", require("./routes/payments"));
app.use("/api", require("./routes/songs"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/build/index.html"));
});

/* --- Bootup --- */
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;