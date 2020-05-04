import {
    PAYMENTS_REQUESTED, PAYMENTS_ERROR,
    PAYPAL_SUBSCRIPTION_CREATED,
    PAYPAL_SUBSCRIPTION_RETURNED, PAYPAL_SUBSCRIPTION_UPDATED, PAYPAL_SUBSCRIPTION_DELETED
} from "../actions/types";

const initialState = {
    isLoading: false,
    paypal: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case PAYMENTS_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case PAYMENTS_ERROR:
            return {
                ...state,
                isLoading: false
            };
        case PAYPAL_SUBSCRIPTION_CREATED:
        case PAYPAL_SUBSCRIPTION_RETURNED:
        case PAYPAL_SUBSCRIPTION_UPDATED:
            return {
                ...state,
                isLoading: false,
                subscription: action.payload
            };
        case PAYPAL_SUBSCRIPTION_DELETED:
            return {
                ...state,
                isLoading: false,
                subscription: null
            };
        default:
            return state;
    };
};