import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const app = (
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
