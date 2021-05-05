import { Anchor, Avatar, Box } from 'grommet';
import React, { Component } from 'react';
import global from '../global'
import authService from '../services/auth-service';

class UserNav extends Component {
    componentDidMount() {
        authService.getCurrentUser().then(data => {
            this.setState({
                loggedIn: data.loggedIn,
                user: data.user
            })
            console.log(data.user)
        })
    }
    state = { 
        loggedIn: false,
        user: {}
     }
    render() { 
        return ( 
            <div>{this.state.loggedIn
                ? <Box direction="row" gap="small"><Anchor>{this.state.user.firstname}</Anchor><Avatar size="small" src={this.state.user.profilePic} /></Box>
                : <Anchor href={`${global.getBackendUrl()}/auth`} hoverIndicator>Login</Anchor>
            }
                
            </div>
        );
    }
}
 
export default UserNav;