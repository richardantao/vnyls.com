import {
    USER_REQUESTED, USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS, REGISTER_FAILED,
    LOGIN_SUCCESS, LOGIN_FAILED,
    LOGOUT_SUCCESS
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_REQUESTED });

    axios.get("/api/v1/users", tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status, "AUTH_ERROR"));
            dispatch({ type: AUTH_ERROR });
        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status, "AUTH_ERROR"));
            dispatch({ type: AUTH_ERROR });
        };

        dispatch(returnErrors(err.request.data, err.request.status, "AUTH_ERROR"));
        dispatch({ type: AUTH_ERROR });
    });
};

export const register = user => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("api/v1/users", user, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAILED"));
            dispatch({ type: REGISTER_FAILED });
        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status, "REGISTER_FAILED"));
            dispatch({ type: REGISTER_FAILED });
        };

        dispatch(returnErrors(err.request.data, err.request.status, "REGISTER_FAILED"));
        dispatch({ type: REGISTER_FAILED });
    });
};

export const login = user => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    axios.post("/api/v1/users/authentication", user, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAILED"));
            dispatch({ type: LOGIN_FAILED });
        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status, "LOGIN_FAILED"));
            dispatch({ type: LOGIN_FAILED });
        };

        dispatch(returnErrors(err.request.data, err.request.status, "LOGIN_FAILED"));
        dispatch({ type: LOGIN_FAILED });
    });
};

export const logout = () => dispatch => {
    axios.delete("/api/v1/users/authentication")
    .then(res => dispatch({
        type: LOGOUT_SUCCESS
    }))
    .catch(err => {
        returnErrors(err.response.data, err.response.status, "LOGOUT_FAILED");
    });
};

export const tokenConfig = getState => {
    const token = getState().auth.token; // change to get token from cookie

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if(token) config.headers["x-auth-token"] = token;

    return config;
};