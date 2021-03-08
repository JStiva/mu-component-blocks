import React from "react";
import ReactDOM from "react-dom";
import MuLayout from "./layouts/MuLayout";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';


ReactDOM.render(
    <BrowserRouter >
        <Switch>
            <Route path="/mu" component={MuLayout} />
            <Redirect from="/" to="/mu/home-page" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
