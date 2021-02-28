import { Anchor, Nav } from 'grommet';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <Nav direction="row" background="neutral-3" pad="medium">
                <Anchor as={Link} to="/" hoverIndicator>Home</Anchor>
                <Anchor as={Link} to="/todo" hoverIndicator>Todos</Anchor>
                <Anchor as={Link} to="/files" hoverIndicator>Files</Anchor>
                <Anchor as={Link} to="/timetable" hoverIndicator>Schedule</Anchor>
            </Nav>
        );
    }
}
 
export default Navbar;