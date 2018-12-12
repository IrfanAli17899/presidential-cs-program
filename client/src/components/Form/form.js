/*eslint-disable*/

import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormStyle.css"


import { validateForm, Loader } from "./helpers/helper.js";
import Recaptcha from './helpers/recaptcha'
import { MyInput, MySelect, MyRadio } from "./Input/MyInput";

import RegistrationFormMiddleware from "../../store/middleware/registrationFormMiddleware";
import { connect } from "react-redux";

import Path from '../../config/path';
import allCities from "./cities.json"
import Swal from 'sweetalert2';
import ReactGA from "react-ga";




class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submited: false,
            data: {
                fullName: "",
                DOB: "",
                gender: "",
                email: "",
                phoneNumber: "",
                lastQualification: "",
                studentCnic: "",
                fatherCnic: "",
                fatherName: "",
                homeAddress: "",
                image: "",
                course: "",
                province: "",
                city: "",
                distanceLearning: false
            },
            userData: this.props.location.state,
            errors: {
                hasError: false,
                errorsObj: {}
            },
            showSubmitBtn: false,
            crrProvince: "Select",
            serverError: {
                hasError: false,
                message: ""
            }
        }

        ReactGA.event({
            category: 'Form Registration',
            action: 'Started'
        });

        /*
        if (!this.state.userData) {
            this.props.history.replace('/apply')
        }
        else if (!this.state.userData.databaseToken) {
            this.props.history.replace('/apply')
        } else {
            this.state.data.fullName = this.props.location.state.name;
        }
        */
    }


    changeData = (ev) => {
        let { data, errors } = this.state;
        switch (ev.target.name) {
            case "imagePicker":
                data["image"] = this.refs.imagePicker.files[0];
                this.setState({
                    file: this.refs.imagePicker.files[0]
                        ? URL.createObjectURL(this.refs.imagePicker.files[0])
                        : null,
                    data,
                    errors: validateForm("each", data, "image", errors)
                })
                break;
            case "distanceLearning":
                data.distanceLearning = !data.distanceLearning
                this.setState({
                    data
                })
                break;
            case "province":
                data.province = ev.target.value;
                this.setState({
                    crrProvince: ev.target.value,
                    data,
                    errors: validateForm("each", data, ev.target.name, errors)
                })
                break;
            default:
                data[ev.target.name] = ev.target.value
                this.setState({
                    data,
                    errors: validateForm("each", data, ev.target.name, errors)
                })
                break;
        }
    }
    componentDidMount() {
        //if (this.state.userData) {
            Swal({
                title: 'Notice',
                text: `We are launching classes starting in Karachi. Soon we will add Islamabad,
                Peshawar, Lahore, and Quetta.  Therefore, only students who live in Karachi are eligible to participate in onsite classes. In addition, 
                students who are able to come to Karachi for exams are eligible for distance learning.`,
                type: 'warning',
            }).then((result) => {

            })
        //}

    }
    alreadyApplied(){
        this.props.history.replace('/already-applied')
    }
    submitForm(ev) {
        ev.preventDefault();
        let { data } = this.state;
        //let { userId, databaseToken } = this.state.userData;
        const {
            image,
            DOB,
            course,
            email,
            fatherName,
            fullName,
            phoneNumber,
            gender,
            homeAddress,
            lastQualification,
            studentCnic,
            fatherCnic,
            distanceLearning,
            city,
            province
        } = this.state.data;

        var validate = validateForm("all", data);
        if (validate.hasError) {
            window.scrollTo(0, 0)
            this.setState({ errors: validate });
            return
        }

        this.setState({ submited: true })

        var formData = new FormData();
        formData.append("image", image);
        formData.append("dob", DOB);
        formData.append("course", course);
        formData.append("email", email);
        formData.append("fatherName", fatherName);
        formData.append("fullName", fullName);
        formData.append("phoneNumber", phoneNumber);
        formData.append("gender", gender);
        formData.append("homeAddress", homeAddress);
        formData.append("lastQualification", lastQualification);
        formData.append("studentCnic", studentCnic);
        formData.append("fatherCnic", fatherCnic);
        //formData.append('userId', userId);
        formData.append('distanceLearning', distanceLearning);
        //formData.append('databaseToken', databaseToken);
        formData.append('city', city);
        formData.append('province', province);
        ReactGA.event({
            category: 'Form Registration',
            action: 'Form Submitted'
        });
        fetch(Path.REGISTRATION_FORM, {
            method: 'POST',
            body: formData,
        }).then(response => {
            return response.json();
        }).then(responseJson => {
            this.setState({ submited: false });
            //console.log(responseJson);
            if (responseJson.success == false) {
                
                let serverError = {
                    hasError: true,
                    message: responseJson.message
                    //message: "Your Email Phone Or Cnic in already exist in Database"
                }
                
                this.setState({ serverError });
                // alert("Your Email Phone Or Cnic in already exist in Database");
                this.setState({})
            }
            else {
                ReactGA.event({
                    category: 'Form Registration',
                    action: 'Success'
                });
                this.props.history.replace('/idcard', responseJson.userData)
            }
        }).catch((err) => {
            //console.log("working")
            //console.log(err);
            let serverError = {
                hasError: true,
                message: err
                //message: "Your Email Phone Or Cnic in already exist in Database"
            }
            this.setState({ serverError });
            this.setState({ submited: false });

        });
    }

    googleCaptcha = () => {
        this.setState({ showSubmitBtn: true })
    }



    render() {
        const {
            fullName, DOB, email, phoneNumber, studentCnic, fatherName, homeAddress, fatherCnic, distanceLearning, province
        } = this.state.data;



        const { errors, file, submited, showSubmitBtn, crrProvince, serverError } = this.state;

        return (

            <div className="container-fluid p-0">
                {submited && <Loader />}
                <div className="Rectangle-58">
                    <form id="myForm" ref="myForm" onSubmit={(ev) => this.submitForm(ev)}  >
                        <h1 className="APPLICATION-FORM ">APPLICATION FORM</h1>
                        <button type="button" className="Rectangle-60" onClick={this.alreadyApplied.bind(this)}>Already Applied</button>
                        <MySelect
                            info={{
                                DisplayName: "Course",
                                name: "course",
                                id: "course",
                                changeData: this.changeData,
                                options: [
                                    {
                                        DisplayName: "Artificial Intelligence",
                                        value: "AIC"
                                    }, {
                                        DisplayName: "Cloud Computing",
                                        value: "CNC"
                                    }, {
                                        DisplayName: "Blockchain",
                                        value: "BCC"
                                    }
                                ],
                                errors
                            }}
                        />
                        <div id="check-container">
                            <strong className="label">Distance Learning</strong>
                            <input type="checkbox" onChange={(ev) => this.changeData(ev)} checked={distanceLearning} name="distanceLearning" id="dl" />
                            <strong className="label check-message">For Distance Learning You Must Be In Karachi Or Come To Karachi For Exam</strong>
                        </div>

                        <MyInput info={{
                            type: "text",
                            DisplayName: "Full Name",
                            additionalData: "( Please specify your complete name as it appears on your CNIC. )",
                            name: "fullName",
                            id: "fullName",
                            value: fullName,
                            placeholder: "Your Full Name",
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "CNIC or B-Form #",
                            name: "studentCnic",
                            id: "studentCnic",
                            maxlength:13,
                            value: studentCnic,
                            placeholder: "CNIC or B-Form # without hyphenation",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Father’s Full Name",
                            name: "fatherName",
                            additionalData: "( Please specify your father's complete name as it appears on his CNIC. )",
                            id: "fatherName",
                            value: fatherName,
                            placeholder: "Father’s full name",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Father’s CNIC #",
                            name: "fatherCnic",
                            id: "fatherCnic",
                            maxlength:13,
                            value: fatherCnic,
                            placeholder: "Father’s CNIC # without hyphenation",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Email Address",
                            name: "email",
                            id: "email",
                            value: email,
                            placeholder: "Your valid email address",
                            changeData: this.changeData,

                            errors
                        }} />


                        <MyInput info={{
                            type: "text",
                            DisplayName: "Your Mobile Number",
                            name: "phoneNumber",
                            id: "phoneNumber",
                            value: phoneNumber,
                            placeholder: "Your valid mobile number ( 03XXXXXXXXX )",
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Address",
                            name: "homeAddress",
                            id: "homeAddress",
                            value: homeAddress,
                            maxlength:120,
                            additionalData:'( maximum 120 letter )',
                            placeholder: "Your valid residential address",
                            changeData: this.changeData,

                            errors
                        }} />
                        <MySelect
                            info={{
                                DisplayName: "Province",
                                name: "province",
                                id: "province",
                                changeData: this.changeData,
                                options: [
                                    {
                                        DisplayName: "Sindh",
                                        value: "sindh"
                                    }, {
                                        DisplayName: "Punjab",
                                        value: "punjab"
                                    }, {
                                        DisplayName: "Blochistan",
                                        value: "blochistan"
                                    }, {
                                        DisplayName: "KPK",
                                        value: "kpk"
                                    }
                                ],
                                errors
                            }}
                        />
                        <MySelect
                            info={{
                                DisplayName: "City",
                                name: "city",
                                id: "city",
                                changeData: this.changeData,
                                options:
                                    allCities[crrProvince].map((item) => {
                                        return {
                                            DisplayName: item,
                                            value: item
                                        }
                                    })
                                ,
                                errors
                            }}
                        />




                        <MyInput info={{
                            type: "date",
                            DisplayName: "Date Of Birth",
                            name: "DOB",
                            id: "DOB",
                            value: DOB,
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyRadio
                            info={{
                                type: "radio",
                                name: "gender",
                                DisplayName: "Gender",
                                options: [
                                    {
                                        DisplayName: "Male",
                                        id: "Male",
                                        value: "male",
                                    },
                                    {
                                        DisplayName: "Female",
                                        id: "Female",
                                        value: "female",
                                    }
                                ],

                                changeData: this.changeData,
                                errors

                            }}

                        />
                        <MySelect
                            info={{
                                DisplayName: "Please select your highest qualification.",
                                name: "lastQualification",
                                id: "lastQualification",
                                changeData: this.changeData,
                                options: [
                                    {
                                        DisplayName: "Matric",
                                        value: "Matric"
                                    },
                                    {
                                        DisplayName: "O Levels",
                                        value: "O Levels"
                                    }, {
                                        DisplayName: "Intermediate",
                                        value: "Intermediate"
                                    }, {
                                        DisplayName: "A Levels",
                                        value: "A Levels"
                                    }, {
                                        DisplayName: "Undergraduate",
                                        value: "Undergraduate"
                                    }, {
                                        DisplayName: "Graduate",
                                        value: "Graduate"
                                    }, {
                                        DisplayName: "Post-Graduate",
                                        value: "Post-Graduate"
                                    }
                                ],
                                errors
                            }}
                        />
                        <div className="Rectangle-78">
                            <h1 className="label">Your Photo</h1>
                            <input type="file" className="d-none" name="imagePicker" ref="imagePicker"
                                id="imagePicker" onChange={(ev) => this.changeData(ev)}
                                accept="image/jpg,image/png,image/jpeg"
                            />
                            <div className="">
                                <div className="img-container" style={{
                                    backgroundImage: file ? `url(${file})` : `url(http://www.westminsterbc.org.uk/wp-content/uploads/2015/09/men-placeholder.png)`
                                }}>
                                </div>
                                <div className="Rectangle-63">
                                    <div>
                                        <p className="-File-type-jpg-jpeg-png">1) With white background</p>
                                        <p className="-File-type-jpg-jpeg-png">2) File size must be less than 1MB</p>
                                        <p className="-File-type-jpg-jpeg-png">3) File type: jpg, jpeg, png</p>
                                        <p className="-File-type-jpg-jpeg-png">4) Upload your recent passport size picture</p>
                                        <p className="-File-type-jpg-jpeg-png">5) Your Face should be clearly visible </p>
                                    </div>
                                    <button type="button" className="Rectangle-62" onClick={() => this.refs.imagePicker.click()}>Select</button>
                                </div>
                            </div>
                            {errors.errorsObj["imagePicker"] && <p className="error"  >{errors.errorsObj["imagePicker"].message}</p>}
                        </div>
                        <div>
                            <Recaptcha googleCaptcha={this.googleCaptcha} />
                        </div>

                        <p className="my-error ">{serverError.hasError && serverError.message}</p>

                        <button type="submit" className={!showSubmitBtn ? "Rectangle-60 disable-btn" : "Rectangle-60 "} disabled={!showSubmitBtn}>Submit Application</button>
                    </form>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {

    return {
        isLoading: state.registrationFormReducer.isLoading,
        isError: state.registrationFormReducer.isError,
        errorMessage: state.registrationFormReducer.errorMessage,
        successMessage: state.registrationFormReducer.successMessage,
        authToken: state.authReducer.authToken,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitRegistrationFrom: (registrationForm) => { dispatch(RegistrationFormMiddleware.submitRegistrationFrom(registrationForm)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
