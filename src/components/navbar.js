import { Anchor, Nav } from 'grommet';
import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <Nav direction="row" background="brand" pad="medium">
                <Anchor hoverIndicator>Home</Anchor>
                <Anchor hoverIndicator>Todos</Anchor>
                <Anchor hoverIndicator>Files</Anchor>
                <Anchor hoverIndicator>Schedule</Anchor>
            </Nav>
        );
    }
}
 
export default Navbar;