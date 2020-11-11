import React from "react";
import BlogView from "./BlogView/BlogView";
import CreateView from "./CreateView/CreateView";
import {Route} from "react-router-dom";

const Content = () => {
    return (
        <>
            <Route exact path="/">
                <BlogView/>
            </Route>
            <Route exact path="/createView">
                <CreateView/>
            </Route>
        </>
    )
};

export default Content