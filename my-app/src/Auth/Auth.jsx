import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "./style";
import Login from './Login/Login';
import Registration from './Registration/Registration';

const Auth = () => {
    const classes = useStyles();
    return (
        <Switch>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/reg'>
                <Registration />
            </Route>

        </Switch>
    )

};

export default Auth;