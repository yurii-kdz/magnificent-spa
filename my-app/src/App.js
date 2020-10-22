import React from 'react'
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
} from "react-router-dom";

const App = () => {

    return (
        <Container disableGutters>
            <Router>
                <Header />
                <Body />
            </Router>
        </Container>
    );
};

export default App;
