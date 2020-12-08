import React from "react";
import BlogView from "./BlogView/BlogView";
import CreateView from "./CreateView/CreateView";
import {Route} from "react-router-dom";
import Login from "../../../Login";
import Auth from "../../../Auth/Auth";

const Content = () => {
    return (
        <>
            <Route exact path="/auth">
                <Auth/>
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
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