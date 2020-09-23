import React from 'react';
import {Button, Typography, Avatar} from "@material-ui/core";

import logo from "../../assets/img/logo.png"
import avatar from "../../assets/img/avatar.jpg"
import useStyles from "./style.js";


const Header = () => {
    const classes = useStyles();
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
                <Typography variant="subtitle1" component="p" >Rival</Typography>
                <Typography variant="subtitle2" component="span" >CMS</Typography>
            </div>
            <div className={classes.dock}>
                <Button color="secondary" variant="contained" className={classes.button} >Pro plan</Button>
                <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar}/>
            </div>
        </header>
    );
};

export default Header;