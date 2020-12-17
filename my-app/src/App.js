import React from 'react'
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Auth from "./Auth/Auth";


const App = () => {

    return (
        <Container disableGutters>
            <Router>
                <Header/>
                <Switch>
                    <Body/>
                    <Auth />
                </Switch>
            </Router>
        </Container>
    );
};

export default App;
