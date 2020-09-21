import React from 'react'
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Header from "./components/Header/Header";

const useStyles = makeStyles({
    root: {
        height: "100vh",
    }
})

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
        </div>
    );
}

export default App;
