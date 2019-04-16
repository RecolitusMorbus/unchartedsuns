import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, UniverseGuest } from './views';
import { HeaderContainer } from './components';
import { BackDrop } from './styles/GenStyling';

class App extends Component {
    render() {
        return (
            <BackDrop>
                <HeaderContainer />
                <Route exact path='/' component={Home} />
                <Route path='/welcome-to-uncharted-suns' component={UniverseGuest} />
            </BackDrop>
        );
    }
}

export default App;
