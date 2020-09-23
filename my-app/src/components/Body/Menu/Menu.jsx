import React from 'react';
import {Typography, List, ListItem, ListItemText, Container} from "@material-ui/core";
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
    {text: "View site", icon: <Home/>},
    {text: "Create page", icon: <FilePlus/>},
    {text: "Blog articles", icon: <PenTool/>},
    {text: "Files", icon: <Image/>},
    {text: "Users", icon: <Users/>},
    {text: "Subscriptions", icon: <Zap/>},
    {text: "Archived pages", icon: <Trash/>}
];

const menuItemsSecondary = [
    {text: "Themes", icon: <Book/>},
    {text: "Plugins", icon: <Box/>},
    {text: "Update plans", icon: <Coffee/>},
];

const Menu = () => {
    const classes = useStyles();

    let menuItem = menuItems.map(i =>
        <ListItem className={classes.listItem}>
            {i.icon}
            <ListItemText className={classes.item}
                          primary={i.text}
            />
        </ListItem>
    );

    let menuItemSecondary = menuItemsSecondary.map(i =>
        <ListItem className={classes.listItem}>
            {i.icon}
            <ListItemText className={classes.item}
                          primary={i.text}
            />
        </ListItem>
    )

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h6">
                Manage
            </Typography>
            <List className={classes.list}>
                {menuItem}
            </List>
            <Typography variant="h6">
                Pro features
            </Typography>
            <List className={classes.list}>
                {menuItemSecondary}
            </List>
        </Container>
    )
};

export default Menu;