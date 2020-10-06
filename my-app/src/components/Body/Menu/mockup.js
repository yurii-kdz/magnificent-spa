import React from "react";
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

const data = {
    menuItems : [
        {text: "View site", icon: <Home viewBox="0 0 24 24"/>},
        {text: "Create page", icon: <FilePlus viewBox="0 0 24 24"/>},
        {text: "Blog articles", icon: <PenTool viewBox="0 0 24 24"/>},
        {text: "Files", icon: <Image viewBox="0 0 24 24"/>},
        {text: "Users", icon: <Users viewBox="0 0 24 24"/>},
        {text: "Subscriptions", icon: <Zap viewBox="0 0 24 24"/>},
        {text: "Archived pages", icon: <Trash viewBox="0 0 24 24"/>}
    ],
    menuItemsSecondary : [
        {text: "Themes", icon: <Book viewBox="0 0 24 24"/>},
        {text: "Plugins", icon: <Box viewBox="0 0 24 24"/>},
        {text: "Update plans", icon: <Coffee viewBox="0 0 24 24"/>},
    ]

};

export default data;