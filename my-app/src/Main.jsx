import React from 'react';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Container from '@material-ui/core/Container';


const Main = () => {
    return (
        <Container disableGutters>
            <Header/>
            <Body/>
        </Container>
    );
};

export default Main;