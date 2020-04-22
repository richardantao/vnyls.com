import { combineReducers } from "redux";

import auth from "./auth";
import error from "./errors";
import song from "./songs";

export default combineReducers({ 
    auth,
    error,
    song
});