require("dotenv").config();
const async = require("async");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authSecret = process.env.JWT_SECRET;

const User = require("../models/Users");

exports.register = (req, res) => {
    const { first, last, email, password } = req.body;

        const hashPassword = callback => {
            bcrypt.genSalt(10, (err, salt) => {
            if(err) return res.status(500).json({ message: "The server was unable to generate a salt for your password" });
            
            bcrypt.hash(password.trim(), salt, (err, hash) => {
                if(err) return res.status(500).json({ message: "The server was unable to hash your password" });
                
                return callback(null, hash);
            });
        });
    };

    const registerUser = (hash, callback) => {
        User.create({
            name: {
                first: first.trim(),
                last: last.trim()
            },
            email: email.trim(),
            password: hash
        })
        .then(user => {
            return callback(null, user);
        })
        .catch(err => {
            return res.status(500).json({ message: err.message });
        });
    };

    async.waterfall([ hashPassword, registerUser ], (err, results) => {
        if(err) return res.status(500).json({ message: err.message });

        return res.status(201).json(results);
    });
};

exports.user = (req, res) => {
    const { _id } = req.user;

    User.findOne({ _id }, {
        _id: 0,
        name: 1,
        email: 1
    })
    .then(user => {
        if(!user) return res.status(404).json({ message: "User information could not be found" });

        return res.status(200).json(user);
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    }); 
};

exports.terminate = (req, res) => {
    const { _id } = req.user;
    
    User.deleteOne(_id)
    .then(() => {
        return res.status(200);
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

exports.login = (req, res) => {
    const { email } = req.body;

    User.findOne({ email }, { _id: 1 })
    .then(user => {
        const token = jwt.sign(
            { id: user._id },
            authSecret,
            { expiresIn: "3d" }
        );

        return res.status(201).cookie("jwt", `Bearer ${token}`, {
            maxAge: 3*(1000*60*60*24),
            secure: true,
            httpOnly: true,
        });
    })
    .catch(err => {
        return res.status(500).json({ message: err.message });
    });
};

exports.logout = (req, res) => {
    return res.status(200).clearCookie("jwt");
};