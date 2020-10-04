import React from 'react';
import {Typography, ListItem, ListItemText, Grid} from "@material-ui/core";
import useStyles from "./style";
import Home from "../../../icons/Home";
import Image from "../../../icons/Image";
import PenTool from "../../../icons/PenTool";
import Trash from "../../../icons/Trash";
import Users from "../../../icons/Users";
import Zap from "../../../icons/Zap";
import FilePlus from "../../../icons/FilePlus";
import Book from "../../../icons/Book";
import Box from "../../../icons/Box";
import Coffee from "../../../icons/Coffee";

const menuItems = [
    {text: "View site", icon: <Home viewBox="0 0 24 24"/>},
    {text: "Create page", icon: <FilePlus viewBox="0 0 24 24"/>},
    {text: "Blog articles", icon: <PenTool viewBox="0 0 24 24"/>},
    {text: "Files", icon: <Image viewBox="0 0 24 24"/>},
    {text: "Users", icon: <Users viewBox="0 0 24 24"/>},
    {text: "Subscriptions", icon: <Zap viewBox="0 0 24 24"/>},
    {text: "Archived pages", icon: <Trash viewBox="0 0 24 24"/>}
];

const menuItemsSecondary = [
    {text: "Themes", icon: <Book viewBox="0 0 24 24"/>},
    {text: "Plugins", icon: <Box viewBox="0 0 24 24"/>},
    {text: "Update plans", icon: <Coffee viewBox="0 0 24 24"/>},
];

const Menu = () => {
    const classes = useStyles();

    let menuItem = menuItems.map(i =>
        <ListItem className={classes.listItem}>
            {i.icon}
            <ListItemText classes={{primary: classes.primary}} primary={i.text} />
        </ListItem>
    );

    let menuItemSecondary = menuItemsSecondary.map(i =>
        <ListItem className={classes.listItem}>
            {i.icon}
            <ListItemText classes={{primary: classes.primary}} primary={i.text} />
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