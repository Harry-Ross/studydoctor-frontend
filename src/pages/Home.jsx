import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios';
import classroomService from '../services/classroom-service';

class HomePage extends Component {
    componentDidMount() {
        classroomService.getClasses().then(data => {
            console.log(data)
        }).catch(e => console.error(e))

        classroomService.getClasswork().then(data => {
            data.map(work => {
                console.log(work.title)
            })
        }).catch(e => console.error(e))
    }
    state = {  }

    render() { 
        return (
            <div>
                <p>yeahhh</p>
            </div>
        );
    }
}
 
export default HomePage;