const { model, Schema } = require("mongoose");

module.exports = model("users", new Schema({
    paypal: Schema.Types.ObjectId,
    stripe: Schema.Types.ObjectId,
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}));