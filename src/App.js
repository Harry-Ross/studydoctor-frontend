import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Box, Grommet, Nav, Anchor, Main, FormField, TextInput, Form, CheckBox, Sidebar, Button, Avatar } from 'grommet';

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
import TodosPage from './pages/Todos';
import Navbar from './components/navbar';
import TimetablePage from './pages/Timetable';

class App extends Component {
    
    render() { 
        return (
            <Router>
                <Grommet theme={grommet}>
                <Navbar />
                    <Main>
                        <Switch>
                            <Route exact path="/todo" component={TodosPage} />
                            <Route exact path="/timetable" component={TimetablePage}/>
                        </Switch>
                    </Main>
                </Grommet>
            </Router> 
        );
    }
}

const SidebarButton = ({ icon, label, ...rest }) => (
    <Box pad="small">
      <Button
        gap="medium"
        alignSelf="start"
        plain
        icon={icon}
        label={label}
        {...rest}
      />
    </Box>
  );
 
export default App;
