import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios';

class HomePage extends Component {
    state = {  }
    componentDidMount() {
        axios.get('http://localhost:4000/api/classroom/tasks')
    }

    render() { 
        return (
            <div>
                
            </div>
        );
    }
}
 
export default HomePage;