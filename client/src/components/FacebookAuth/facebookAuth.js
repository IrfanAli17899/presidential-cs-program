import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';
import Path from '../../config/path';


class FacebookAuth extends Component {

    responseFacebook = (response) => {
        
        console.log(response);
        fetch(Path.FACEBOOK_AUTH, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        }).then(data => {
            return data.json();
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="2189492634459305"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
            </div>
        )
    }
}
export default FacebookAuth;