import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";

render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.querySelector("#root")
);

serviceWorker.unregister();