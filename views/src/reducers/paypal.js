import {
    PAYMENTS_REQUESTED, PAYMENTS_ERROR,
    PAYPAL_SUBSCRIPTION_CREATED, PAYPAL_SUBSCRIPTION_DELETED
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
            return {
                ...state,
                isLoading: false,
                paypal: action.payload
            };
        case PAYPAL_SUBSCRIPTION_DELETED:
            return {
                ...state,
                isLoading: false,
                paypal: {}
            };
        default:
            return state;
    };
};