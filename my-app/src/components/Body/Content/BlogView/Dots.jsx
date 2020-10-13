import React from 'react';
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
const Dots = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container justify="center">
                <span className={classes.dot}/>
                <span className={classes.dot}/>
                <span className={classes.dot}/>
            </Grid>
        </div>
    );
};

export default Dots;