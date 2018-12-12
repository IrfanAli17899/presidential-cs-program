import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./alreadyApplied.css";
import { validateForm, Loader } from "./helper.js";
import axios from "axios";

import Path from '../../config/path';
import ReactGA from "react-ga";

class AlreadyApplied extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        studentCnic: "",
        contactNumber: "",
        email: ""
      },
      message: "",
      showLoader: false,
      errors: null,
      showNotFoundError: false
    };
    ReactGA.event({
        category: 'Already Applied',
        action: 'Started'
      });
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
        studentCnic,
        contactNumber,
        email
    } = this.state.data;
    let validate = validateForm("all", data);
    if (validate.hasError) {
      this.setState({ errors: validate });
      return;
    }
    this.setState({ showLoader: true });
    ReactGA.event({
        category: 'Already Applied',
        action: 'Details Submitted'
      });
      
    try {
    axios
      .post(Path.FIND_ID_CARD, {
        studentCnic,
        contactNumber,
        email
      })
      .then(response => {
        this.setState({
          data: {
            studentCnic: "",
            contactNumber: "",
            email: ""
          },
          showLoader: false,
          showNotFoundError: false,
          message: ""
        });
        if(response.data.success){
            ReactGA.event({
                category: 'Already Applied',
                action: 'Success'
              });
            this.props.history.replace('/idcard', response.data.userData)
        }
        else {
            ReactGA.event({
                category: 'Already Applied',
                action: 'Not Found'
            });
            this.setState({
                showNotFoundError: true,
            });
        }
        
      })
      .catch(err => {
        this.setState({
            showLoader: false,
            showNotFoundError: true,
        });
      });
    }
    catch(error){
        this.setState({
            showLoader: false,
            showNotFoundError: true,
        });
    }
  };
  render() {
    const {
        studentCnic,
        contactNumber,
        email
    } = this.state.data;
    const {
      message,
      errors,
      showLoader,
      showNotFoundError
    } = this.state;
    return (
      <div>
        {showLoader ? <Loader /> : <div />}
        <div className="container-fluid" style={{ padding: 0 }}>
          {!showNotFoundError && <div className="ContactClass col-md-12">
            <div id="myForm" style={{ width: "70vw" }}>
              <div className="main">
                <div className="beta">
                  <h1 className="APPLICATION-FORM">Find My Id Card</h1>
                  <div className="row">
                    <div className="col-md-12 row2mail">
                      <label className="label">
                      CNIC or B-Form #:
                    {errors && errors.errorsObj.studentCnic && (
                          <span className="errorContact staric">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        value={studentCnic}
                        onChange={this.handleChnage}
                        name="studentCnic"
                        className="form-control input11"
                        placeholder="CNIC or B-Form # without hyphenation"
                      />
                      {errors && errors.errorsObj.studentCnic && (
                        <p className="errorContact">
                          {errors.errorsObj.studentCnic.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 row2mail">
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
                  </div>
                  <div className="row">
                    <div className="col-md-12 row2mail">
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
                  
                  <div className="row btnRow">
                    <div className="col-md-6">
                      <button
                        onClick={this.onSubmit}
                        className=" btn Rectangle-112 col-md-12"
                      >
                        Show Id Card
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

          {showNotFoundError &&
            <div className="calculate-heigth">
              <h1>No Record Found!</h1>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default AlreadyApplied;
