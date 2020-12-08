import React from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "./style";

const Auth = () => {
    const classes = useStyles();
    return (
        <>
            <Grid item className = {classes.item} justify= 'center'>
                <Typography variant="p"> Rival </Typography>
                <Typography variant="p"> CMS </Typography>
            </Grid>
            <Login/>
            <Registration />
        </>
    )

};

export default Auth;