import React from 'react';
import {Typography, ListItem, ListItemText, Grid} from "@material-ui/core";
import useStyles from "./style";
import data from "./mockup";

const Menu = () => {
    const classes = useStyles();

    let menuItem = data.menuItems.map(i =>
        <ListItem>
            {i.icon}
            <ListItemText classes={{primary: classes.primary}} primary={i.text}/>
        </ListItem>
    );

    let menuItemSecondary = data.menuItemsSecondary.map(i =>
        <ListItem className={classes.listItem}>
            {i.icon}
            <ListItemText classes={{primary: classes.primary}} primary={i.text}/>
        </ListItem>
    )

    return (
        <Grid container className={classes.container}>
            <Typography variant="h6">
                Manage
            </Typography>
            <Grid container className={classes.list}>
                {menuItem}
            </Grid>
            <Typography variant="h6">
                Pro features
            </Typography>
            <Grid container className={classes.list}>
                {menuItemSecondary}
            </Grid>
        </Grid>
    )
};

export default Menu;