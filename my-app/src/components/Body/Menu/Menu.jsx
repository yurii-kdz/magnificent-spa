import React from 'react';
import {Typography, ListItem, ListItemText, Grid} from "@material-ui/core";
import useStyles from "./style";
import data from "./mockup";

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
                        <ListItem>
                            {i.icon}
                            <ListItemText classes={{primary: classes.primary}} primary={i.text}/>
                        </ListItem>
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