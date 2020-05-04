import {
    PAYMENTS_REQUESTED, PAYMENTS_ERROR,
    STRIPE_SUBSCRIPTION_CREATED,
    STRIPE_SUBSCRIPTION_RETURNED, STRIPE_SUBSCRIPTION_UPDATED, STRIPE_SUBSCRIPTION_DELETED,
    STRIPE_PUBLIC_KEY_FETCHED
} from "../actions/types";

const initialState = {
    isLoading: false,
    key: null,
    subscription: null
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
        case STRIPE_SUBSCRIPTION_CREATED:
        case STRIPE_SUBSCRIPTION_RETURNED:
        case STRIPE_SUBSCRIPTION_UPDATED:
            return {
                ...state,
                isLoading: false,
                subscription: action.payload
            };
        case STRIPE_SUBSCRIPTION_DELETED:
            return {
                ...state,
                isLoading: false,
                subscription: null
            };
        case STRIPE_PUBLIC_KEY_FETCHED:
            return {
                ...state,
                isLoading: false,
                key: action.payload
            };
        default:
            return state;
    };
};