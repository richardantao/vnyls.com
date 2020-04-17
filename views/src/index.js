import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

render(
    <Router>
        <App />
    </Router>,
    document.querySelector("#root")
);

serviceWorker.unregister();