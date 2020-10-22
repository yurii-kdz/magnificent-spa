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
            <Route exact path="/" component={
                () => <BlogView/>
            }>
            </Route>
            <Route exact path="/createView">
                <CreateView/>
            </Route>
        </Switch>
    )
};

export default Content