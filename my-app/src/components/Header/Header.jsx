import React from 'react';
import {Button, Typography, Avatar, Grid} from "@material-ui/core";
import logo from "../../assets/img/logo.png"
import avatar from "../../assets/img/avatar.jpg"
import useStyles from "./style.js";

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container justify="space-between" className={classes.header}>
            <Grid item xs={6}>
                <Grid alignItems="center" container className={classes.logo}>
                    <img src={logo} alt="logo"/>
                    <Typography variant="subtitle1" component="p" >Rival</Typography>
                    <Typography variant="subtitle2" component="span" >CMS</Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} >
                <Grid alignItems="center" justify="flex-end" container className={classes.dock}>
                    <Button color="secondary" variant="contained" size="small" className={classes.button} >Pro plan</Button>
                    <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;