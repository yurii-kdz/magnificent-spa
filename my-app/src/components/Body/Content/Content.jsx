import React from "react";
import BlogView from "./BlogView/BlogView";
import useStyles from "./style";

const Content = () => {
    const classes = useStyles();

    return(
        <div className={classes.content}>
            <BlogView/>
        </div>
    )
};

export default Content