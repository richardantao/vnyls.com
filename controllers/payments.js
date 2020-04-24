const async = require("async");
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paypal = require("../config/paypal");

exports.createStripeSubscription = (req, res) => {
    const { payment_method, email } = req.body;

    const createCustomer = callback => {
        const customer = stripe.customers.create({
            payment_method,
            email,
            invoice_settings: {
                default_payment_method: payment_method
            }
        });

        return callback(null, customer);
    };

    const createSubscription = (customer, callback) => {

        const subscription = stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: process.env.STRIPE_SUBSCRIPTION_PLAN_ID }],
            expand: ["latest_invoice.payment_intent"]
        });

        return callback(null, subscription);
    };

    const manageStatus = (subscription, callback) => {
        const { latest_invoice } = subscription;
        const { payment_intent } = latest_invoice;

        if (payment_intent) {
            const { client_secret, status } = payment_intent;

            if (status === "requires_action") {
                stripe.confirmCardPayment(client_secret).then(function(result) {
                if (result.error) {
                // Display error message in your UI.
                // The card was declined (i.e. insufficient funds, card has expired, etc)
                };

                // Show a success message to your customer
            });
            }

            // No additional information was needed
            // Show a success message to your customer
        }
    };

    async.waterfall([ createCustomer, createSubscription, manageStatus ], (err, results) => {
        if(err) return res.status(500).json({ message: err.message });

        return res.status(201).json(results);
    });
};

exports.deleteStripeSubscription = (req, res) => {
    const { } = req.params;

};

exports.stripeKey = (req, res) => {
    return res.status(200).json(stripePublishableKey);
};

exports.createPaypalSubscription = (req, res) => {

};

exports.deletePaypalSubscription = (req, res) => {
    const { } = req.params;

};