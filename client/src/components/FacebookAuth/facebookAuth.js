import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';
import Path from '../../config/path';
import './facebookAuth.css'


class FacebookAuth extends Component {

    responseFacebook = (response) => {

        console.log(response);

        fetch(Path.FACEBOOK_AUTH, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)

        })
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                if (data.submitted) {
                    this.props.history.replace('/idcard', data)
                }
                else {
                    console.log("UnSubmitted", data);
                    this.props.history.replace('/form', data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="facebook-Rectangle-588">
                    <div id="facebook-myForm">
                        <div className="facebookButton">
                            <FacebookLogin
                                appId="2189492634459305"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FacebookAuth;