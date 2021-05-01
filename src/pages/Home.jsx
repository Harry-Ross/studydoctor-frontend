import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios';
import classroomService from '../services/classroom-service';

class HomePage extends Component {
    componentDidMount() {
        classroomService.getClasses().then(data => {
            console.log(data)
        })
    }
    state = {  }
    componentDidMount() {
        axios.get('http://localhost:4000/api/classroom/tasks')
    }

    render() { 
        return (
            <div>
                <p>yeahhh</p>
            </div>
        );
    }
}
 
export default HomePage;