const async = require("async");
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paypal = require("../config/paypal");

exports.payment = (req, res) => {
    const { stripeEmail, stripeToken } = req.body;

    const createCustomer = callback => {
        stripe.customers.create({
            email: stripeEmail,
            source: stripeToken
        })
        .then(customer => {
            if(!customer) return res.status(404).json({ message: "New customer was not found" });

            return callback(null, customer);
        })
        .catch(err => {
            return res.status(500).json({ message: err.message });
        });
    };

    const chargeCustomer = (customer, callback) => {
        const amount = process.env.STRIPE_AMOUNT;

        stripe.charges.create({
            amount,
            description: "",
            currency: "USD",
            customer: customer.id
        })
        .then(charge => {
            if(!charge) return res.status(404).json({ message: "New customer was not found" });

            return callback(null, { message: "Payment processed" });
        })
        .catch(err => {
            return res.status(500).json({ message: err.message });
        });   
    };

    async.waterfall([ createCustomer, chargeCustomer ], (err, results) => {
        if(err) return res.status(500).json({ message: err.message });

        return res.status(201).json(results);
    });
};

exports.key = (req, res) => {
    return res.status(200).json({ stripePublishableKey });
};

exports.create = (req, res) => {
    const payment = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3001/",
            "cancel_url": "http://localhost:3000/"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Red Sox Hat",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "Hat for the best team ever"
        }]
    };

    paypal.payment.create(payment, (err, results) => {
        if(err) throw err;

        results.map(({ links }) => {
            if(links.rel === "approval_url") return res.redirect(links.href);
            else return;
        });
    });
};

exports.execute = (req, res) => {
    const { PayerId, paymentId } = req.query;

    const payer = {
        "payer_id": PayerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, payer, (err, payment) => {
        if(err) throw err;

        return res.status(201).json(payment);
    });
};

exports.cancel = (req, res) => {

};