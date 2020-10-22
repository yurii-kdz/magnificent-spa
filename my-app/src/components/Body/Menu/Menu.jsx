import React from 'react';
import {Typography, ListItem, ListItemText, Grid} from "@material-ui/core";
import useStyles from "./style";
import data from "./mockup";
import {NavLink} from "react-router-dom";

const Menu = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Typography variant="h6">
                Manage
            </Typography>
            <Grid container className={classes.list}>
                {
                    data.menuItems.map(i =>
                        <NavLink to={i.route} className={classes.link} activeStyle={{ color: 'red' }}>
                            <ListItem>
                                {i.icon}
                                <ListItemText classes={{primary: classes.primary}} primary={i.text}/>
                            </ListItem>
                        </NavLink>
                )}
            </Grid>
            <Typography variant="h6" classes={{root: classes.root}}>
                Pro features
            </Typography>
            <Grid container className={classes.list}>
                {
                    data.menuItemsSecondary.map(i =>
                        <ListItem className={classes.listItem}>
                            {i.icon}
                            <ListItemText classes={{primary: classes.primary}} primary={i.text}/>
                        </ListItem>
                    )}
            </Grid>
        </Grid>
    )
};

export default Menu;