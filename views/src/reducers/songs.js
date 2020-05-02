import { SONGS_REQUESTED, SONGS_ERROR, SONGS_FETCHED } from "../actions/types";

const initialState = {
    isLoading: false,
    songs: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SONGS_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case SONGS_ERROR:
            return {
                ...state,
                isLoading: false
            };
        case SONGS_FETCHED:
            return {
                ...state,
                isLoading: false,
                songs: action.payload
            };
        default:
            return state;
    };
};