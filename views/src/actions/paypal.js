import {
    PAYMENTS_REQUESTED,
    PAYPAL_SUBSCRIPTION_CREATED,
    PAYPAL_SUBSCRIPTION_RETURNED, PAYPAL_SUBSCRIPTION_UPDATED, PAYPAL_SUBSCRIPTION_DELETED
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";


const setLoading = () => {
    return {
        type: PAYMENTS_REQUESTED
    };
};

export const createSubscription = subscription => dispatch => {
    dispatch(setLoading());

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("http://localhost:3001/api/paypal/subscriptions", subscription, config)
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

export const returnSubscription = _id => dispatch => {
    dispatch(setLoading());

    axios.get(`http://localhost:3001/api/paypal/subscriptions/${_id}`)
    .then(res => dispatch({
        type: PAYPAL_SUBSCRIPTION_RETURNED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};

export const updateSubscription = (_id, subscription) => dispatch => {
    dispatch(setLoading());

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.put(`http://localhost:3001/api/paypal/subscriptions/${_id}`, subscription, config)
    .then(res => dispatch({
        type: PAYPAL_SUBSCRIPTION_UPDATED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, "PAYMENTS_ERROR"));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, "PAYMENTS_ERROR"));

        dispatch(returnErrors("An error occurred", 500, "PAYMENTS_ERROR"));
    });
};

export const deleteSubscription = _id => dispatch => {
    dispatch(setLoading());

    axios.delete(`http://localhost:3001/api/paypal/subscriptions/${_id}`)
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