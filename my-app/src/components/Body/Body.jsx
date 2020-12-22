import React from "react";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import Grid from '@material-ui/core/Grid';

const Body = () => {
    return(
        <Grid container wrap="nowrap">

            <Grid item>
                <Menu />
            </Grid>
            <Grid item>
                <Content />
            </Grid>
        </Grid>
    )
};

export default Body