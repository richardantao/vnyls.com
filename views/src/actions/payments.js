import {
    PAYMENTS_REQUESTED,
    STRIPE_SUBSCRIPTION_CREATED, STRIPE_SUBSCRIPTION_DELETED, STRIPE_PUBLIC_KEY_FETCHED,
    PAYPAL_SUBSCRIPTION_CREATED, PAYPAL_SUBSCRIPTION_DELETED
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

const setLoading = () => {
    return {
        type: PAYMENTS_REQUESTED
    };
};

export const createStripeSubscription = () => dispatch => {
    dispatch(setLoading());

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("/api/stripe/subscriptions", subscription, config)
    .then(res => dispatch({
        type: STRIPE_SUBSCRIPTION_CREATED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};

export const deleteStripeSubscription = _id => dispatch => {
    dispatch(setLoading());

    axios.delete(`/api/stripe/subscriptions/${_id}`)
    .then(res => dispatch({
        type: STRIPE_SUBSCRIPTION_DELETED,
        payload: _id
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};

export const fetchPublicStripeKey = () => dispatch => {
    dispatch(setLoading());

    axios.get("/api/stripe/keys")
    .then(res => dispatch({
        type: STRIPE_PUBLIC_KEY_FETCHED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};

export const createPaypalSubscription = subscription => dispatch => {
    dispatch(setLoading());

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("/api/paypal/subscriptions", subscription, config)
    .then(res => dispatch({
        type: PAYPAL_SUBSCRIPTION_CREATED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};

export const deletePaypalSubscription = _id => dispatch => {
    dispatch(setLoading());

    axios.delete(`/api/paypal/subscriptions/${_id}`)
    .then(res => dispatch({
        type: PAYPAL_SUBSCRIPTION_DELETED,
        payload: _id
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};