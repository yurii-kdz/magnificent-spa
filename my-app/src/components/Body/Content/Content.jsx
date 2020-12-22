import React from "react";
import BlogView from "./BlogView/BlogView";
import CreateView from "./CreateView/CreateView";
import {Route, Switch} from "react-router-dom";
import Login from "../../../Login";
import Auth from "../../../Auth/Auth";

const Content = () => {
    return (
        <Switch>
            <Route exact path="/">
                <BlogView/>
            </Route>
            <Route exact path="/createView">
                <CreateView/>
            </Route>
        </Switch>
    )
};

export default Content