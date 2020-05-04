import { combineReducers } from "redux";

import auth from "./auth";
import error from "./errors";
import paypal from "./paypal";
import stripe from "./stripe";
import song from "./songs";

export default combineReducers({
    auth,
    error,
    paypal,
    stripe,
    song
});