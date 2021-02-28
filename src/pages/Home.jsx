import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios';

class HomePage extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <GoogleLogin
                    clientId={"304421778393-q3l61amqah3oiqs73aoss91glhofds0o.apps.googleusercontent.com"}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={(err) => { console.error(err.details) }}
                    isSignedIn={true}
                />
            </div>
        );
    }
}

const handleLogin = (googleData) => {
    console.log(googleData)
    axios.post(`http://localhost:4000/api/auth/google`, { accessToken: googleData.accessToken, idToken: googleData.tokenId })
        .then(res => {
            console.log(res.data)
        })
}
 
export default HomePage;