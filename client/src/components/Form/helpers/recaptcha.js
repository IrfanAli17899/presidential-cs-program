import React, { Component } from 'react';
import { loadReCaptcha , ReCaptcha } from 'react-recaptcha-google'

class Recaptcha extends Component {
  constructor(props) {
    super(props);
    
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    loadReCaptcha()
    if (this.captchaDemo) {
        this.captchaDemo.reset();
    }
  }

  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
      }
  }
  verifyCallback(recaptchaToken) {
    this.props.googleCaptcha()
   
  }
  render() {
    return (
      <div className="captcha">
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="normal"
            render="explicit"
            sitekey="6LccZYAUAAAAAL30FxZ0DhVQQZKnrJPZTjlaxCUk"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
            type= 'image'
        />
      </div>
    );
  };
}

export default Recaptcha;