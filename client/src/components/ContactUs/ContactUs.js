import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import { validateForm, Loader } from "./helper.js";
import axios from "axios";

import Path from '../../config/path';

class ContactUS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: ""
      },
      message: "",
      showLoader: false,
      errors: null,
      submitted: false
    };
  }


  handleChnage = e => {
    const { name, value } = e.target;
    // this.setState({ [name]: value })
    let { data, errors } = this.state;
    data[name] = value;
    this.setState({
      data,
      errors: validateForm("each", data, name, errors)
    });
  };
  onSubmit = () => {
    let { data, message } = this.state;
    const {
      firstName,
      lastName,
      contactNumber,
      email
    } = this.state.data;
    let validate = validateForm("all", data);
    if (validate.hasError) {
      this.setState({ errors: validate });
      return;
    }
    this.setState({ showLoader: true });
    axios
      .post(Path.CONTACT_US_FORM, {
        firstName,
        lastName,
        phoneNumber: contactNumber,
        message: message,
        email
      })
      .then(response => {
        console.log("response from server ", response);
        this.setState({
          data: {
            firstName: "",
            lastName: "",
            contactNumber: "",
            email: ""
          },
          showLoader: false,
          submitted: true,
          message: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {
      firstName,
      lastName,
      contactNumber,
      email,
    } = this.state.data;
    const {
      message,
      errors,
      showLoader,
      submitted
    } = this.state;
    return (
      <div>
        {showLoader ? <Loader /> : <div />}
        <div className="container-fluid" style={{ padding: 0 }}>
          {!submitted && <div className="ContactClass col-md-12">
            <div id="myForm" style={{ width: "70vw" }}>
              <div className="main">
                <div className="beta">
                  <h1 className="APPLICATION-FORM">Subscribe</h1>
                  <div className="row">
                    <div className="col-md-6 row2mail">
                      <label className="label">
                        First Name:
                    {errors && errors.errorsObj.firstName && (
                          <span className="errorContact staric">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={this.handleChnage}
                        name="firstName"
                        className="form-control input11"
                        placeholder="First name"
                      />
                      {errors && errors.errorsObj.firstName && (
                        <p className="errorContact">
                          {errors.errorsObj.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6 row2mail">
                      <label className="label">
                        Last Name:
                    {errors && errors.errorsObj.lastName && (
                          <span className="errorContact staric">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={this.handleChnage}
                        name="lastName"
                        className="form-control input11"
                        placeholder="Last name"
                      />
                      {errors && errors.errorsObj.lastName && (
                        <p className="errorContact">
                          {errors.errorsObj.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 row2mail">
                      <label className="label">
                        Contact #:
                    {errors && errors.errorsObj.contactNumber && (
                          <span className="errorContact staric">*</span>
                        )}
                      </label>
                      <input
                        type="number"
                        value={contactNumber}
                        name="contactNumber"
                        onChange={this.handleChnage}
                        className="form-control input11"
                        placeholder="03XX-XXXXXXX"
                      />
                      {errors && errors.errorsObj.contactNumber && (
                        <p className="errorContact">
                          {errors.errorsObj.contactNumber.message}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6 row2mail">
                      <label className="label">
                        Email Address:
                    {errors && errors.errorsObj.email && (
                          <span className="errorContact staric">*</span>
                        )}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={this.handleChnage}
                        name="email"
                        className="form-control input11"
                        placeholder="example@abc.com"
                      />
                      {errors && errors.errorsObj.email && (
                        <p className="errorContact">
                          {errors.errorsObj.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 row2mail">
                      <label className="label">
                        Your Message<span style={{ fontSize: ".7em" }} > (optional) :</span>
                        {errors && errors.errorsObj.message && (
                          <span className="errorContact staric">*</span>
                        )}
                      </label>
                      <textarea
                        type="text"
                        rows={8}
                        maxLength="250"
                        onChange={(e) => this.setState({ message: e.target.value })}
                        className="form-control textArea"
                        placeholder="Message here"
                        value={message}
                        name="message"
                      />
                      {errors && errors.errorsObj.message && (
                        <p className="errorContact">
                          {errors.errorsObj.message.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row btnRow">
                    <div className="col-md-3">
                      <button
                        onClick={this.onSubmit}
                        className=" btn Rectangle-112 col-md-12"
                      >
                        Subscribe
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

          {submitted &&
            <div className="calculate-heigth">
              <h1>Thank You</h1>
              <h2>We Will Get Back To You Shortly</h2>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default ContactUS;
