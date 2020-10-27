import React from "react";
import BlogView from "./BlogView/BlogView";
import CreateView from "./CreateView/CreateView";
import {
    Switch,
    Route,
} from "react-router-dom";

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <BlogView/>}>
            </Route>
            <Route exact path="/createView" render={() => <CreateView/>}>

            </Route>
        </Switch>
    )
};

export default Content