import { 
    AUTH_ERROR, 
    USER_REQUESTED, USER_LOADED, 
    LOGIN_SUCCESS, LOGIN_FAILED, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, REGISTER_FAILED
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"), // change to cookie
    isAuthenticated: null,
    loading: false,
    user: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAILED:
            return {
                ...state,
                user: null,
                loading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESS: 
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    };
};