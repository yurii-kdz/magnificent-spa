import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

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
            <Body />

        </div>
    );
}

export default App;
