import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom'


import { Box, Grommet, Nav, Anchor, Main, FormField, TextInput, Form, CheckBox, Sidebar, Button, Avatar, Header, Image } from 'grommet';

import {
    Analytics,
    Chat,
    Clock,
    Configure,
    Help,
    Projects,
    Split,
    StatusInfoSmall,
  } from 'grommet-icons';

import { grommet } from 'grommet/themes'
import './App.css';
import './styles1.css'
import TodosPage from './pages/Todos';
import Navbar from './components/navbar';
import TimetablePage from './pages/Timetable';
import HomePage from './pages/Home';
class App extends Component {
    
    render() { 
        return (
            <Router>
                <Grommet theme={grommet}>
                <Header background="dark-1">
                  <Box direction="row" align="center" gap="small">
                    <Link to="/"><img height="69px" src="/lightlogo.png"/></Link>
                  </Box>
                  <Navbar />
                </Header>
                    <Main pad="large">
                        <Switch>
                          <Route exact path={["/", "/home"]} component={HomePage} />
                            <Route exact path="/todo" component={TodosPage} />
                            <Route exact path="/timetable" component={TimetablePage}/>
                        </Switch>
                    </Main>
                </Grommet>
            </Router> 
        );
    }
}


 
export default App;
