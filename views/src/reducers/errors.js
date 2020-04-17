import { ERRORS_RETURNED, ERRORS_LOGGED, LOGGING_ERROR, ERRORS_CLEARED } from "../actions/types";

const initialState = {
    message: {},
    status: null,
    id: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ERRORS_RETURNED:
            return {
                message: action.payload.message,
                status: action.payload.status,
                id: action.payload.id
            };
        case ERRORS_LOGGED:
            return {
                message: action.payload
            };
        case LOGGING_ERROR:
            return {
                message: action.payload // confirm
            };
        case ERRORS_CLEARED:
            return {
                message: {},
                status: null,
                id: null
            };
        default:
            return state;
    };
};