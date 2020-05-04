const async = require("async");
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const User = require("../models/Users");
jqtx-xsqz-yxcj-vwpz-lamj
exports.createSubscription = (req, res) => {
    const { payment_method, name, email, phone } = req.body;
    const { isAnnual } = req.query;

    const plan = isAnnual ? process.env.STRIPE_SUBSCRIPTION_ANNUAL_PLAN_ID : process.env.STRIPE_SUBSCRIPTION_MONTHLY_PLAN_ID;

    const createCustomer = callback => {
        stripe.customers.create({
            payment_method,
            name,
            email,
            phone,
            invoice_settings: {
                default_payment_method: payment_method
            }
        }, (err, customer) => {
            if(err) return res.status(500).json(err.message);

            return callback(null, customer.id);
        });
    };

    const submitSubscription = (customer, callback) => {
        stripe.subscriptions.create({
            customer,
            items: [{ plan }]
        }, (err, subscription) => {
            if(err) return res.status(500).json(err.message);

            return callback(null, subscription);
        });
    };

    async.waterfall([ createCustomer, submitSubscription ], (err, results) => {
        if(err) return res.status(500).json(err.message);

        return res.status(201).json(results);
    });
};

exports.retrieveSubscription = (req, res) => {
    const { _id } = req.user;

    const getCustomerId = callback => {
        User.findOne({ _id }, {
            stripe: 1
        })
        .then(user => {
            if(!user) return res.status(404).json("Customer not found");

            return callback(null, user.stripe);
        })
        .catch(err => {
            return res.status(500).json(err.message);
        });
    };

    const fetchSubscription = (customerId, callback => {
        stripe.subscriptions.retrieve(customerId, (err, subscription) => {
            if(err) return res.status(500).json(err.message);

            return callback(null, subscription);
        });
    });

    async.waterfall([ getCustomerId, fetchSubscription ], (err, results) => {
        if(err) return res.status(500).json(err.message);

        return res.status(201).json(results);
    });
};

exports.updateSubscription = (req, res) => {
    const { _id } = req.user;
};

exports.deleteSubscription = (req, res) => {
    const { _id } = req.user;

};

exports.fetchKey = (req, res) => {
    return res.status(200).json(stripePublishableKey);
};