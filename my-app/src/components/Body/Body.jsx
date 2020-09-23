import React from "react";
import Menu from "./Menu/Menu";
import useStyles from "./style";
import Content from "./Content/Content";

const Body = () => {
    const classes = useStyles();

    return(
        <div className={classes.body}>
            <Menu />
            <Content />
        </div>
    )
};

export default Body