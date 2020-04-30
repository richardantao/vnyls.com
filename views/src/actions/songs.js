import { SONGS_REQUESTED, SONGS_FETCHED } from "./types";
import { tokenConfig } from "./auth";
import { returnErrors } from "./errors";
import axios from "axios";

const setLoading = () => {
    return {
        type: SONGS_REQUESTED
    };
};

export const fetchSongs = () => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get("http://localhost:3001/api/songs", { withCredentials: true } /*tokenConfig(getState)*/)
    .then(res => dispatch({
        type: SONGS_FETCHED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) {
            dispatch(returnErrors(err.response.data, err.response.status, "SONGS_ERROR"));
        } else if(err.request) {
            dispatch(returnErrors(err.request.data, err.request.status, "SONGS_ERROR"));
        };

        dispatch(returnErrors("", 500, "SONGS_ERROR"));
    });
};