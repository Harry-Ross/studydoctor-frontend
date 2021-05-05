import { Anchor, Nav, RoutedAnchor } from 'grommet';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UserNav from './user-nav';

class Navbar extends Component {

    render() { 
        const links = [
            ["/", "Home"],
            ["/todo", "Todo"],
            ["/files", "Files"],
            ["/timetable", "Timetable"]
        ]
        return ( 
            <Nav direction="row" background="neutral-3" pad="medium">
                {links.map(link => <RouterLink key={link[1]} to={link[0]} label={link[1]} />)}
                <UserNav />
            </Nav>
        );
    }
}

function RouterLink(props) {
    return(
        <Link to={props.to}>
            <Anchor hoverIndicator>{props.label}</Anchor>
        </Link>
    )
}
 
export default Navbar;