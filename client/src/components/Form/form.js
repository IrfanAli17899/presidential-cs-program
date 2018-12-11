import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormStyle.css"
import { validateForm, Loader } from "./helpers/helper.js";
import { MyInput, MySelect, MyRadio } from "./Input/MyInput";

import RegistrationFormMiddleware from "../../store/middleware/registrationFormMiddleware";
import { connect } from "react-redux";

import Path from '../../config/path';


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
                course: ""
            },
            userData: this.props.location.state,
            errors: {
                hasError: false,
                errorsObj: {}
            }
        }
        console.log(this.state.userData);

        if (!this.state.userData) {
            this.props.history.replace('/apply')
        }
        else if (!this.state.userData.databaseToken) {
            this.props.history.replace('/apply')
        } else {
            this.state.data.fullName = this.props.location.state.name;
        }
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
            default:
                data[ev.target.name] = ev.target.value
                this.setState({
                    data,
                    errors: validateForm("each", data, ev.target.name, errors)
                })
                break;
        }
    }

    submitForm(ev) {
        ev.preventDefault();
        let { data } = this.state;
        let { userId, databaseToken } = this.state.userData;
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
            fatherCnic
        } = this.state.data;

        var validate = validateForm("all", data);
        if (validate.hasError) {
            this.setState({ errors: validate }, (x) => {
                console.log(this.state);
            });
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
        formData.append('userId', userId);
        formData.append('databaseToken',databaseToken)
        //var myForm = new FormData(this.refs.myForm);
        //Nothing To Do Just Fetch And Post Data All Set
        //fetch('http://localhost:3001/form', {
        fetch(Path.REGISTRATION_FORM, {
            method: 'POST',
            body: formData,
        }).then(userData => {
            console.log(userData);
            return userData.json();
        }).then(userData => {
            console.log(userData);
            this.setState({ submited: false });
            if (userData.fullName) {
                this.props.history.replace('/idcard', userData)
            }
        }).catch((err) => {
            console.log(err);
            this.setState({ submited: false });

        });

    }



    render() {
        const {
            fullName, DOB, email, phoneNumber, studentCnic, fatherName, homeAddress, fatherCnic,
        } = this.state.data;
        const { errors, file, submited } = this.state;
        return (

            <div className="container-fluid p-0">
                {submited && <Loader />}
                <div className="Rectangle-58">
                    <form id="myForm" ref="myForm" onSubmit={(ev) => this.submitForm(ev)}  >
                        <h1 className="APPLICATION-FORM ">APPLICATION FORM</h1>
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

                        <MyInput info={{
                            type: "text",
                            DisplayName: "Full Name",
                            name: "fullName",
                            id: "fullName",
                            value: fullName,
                            placeholder: "Your Full Name",
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Student’s CNIC or B-Form #",
                            name: "studentCnic",
                            id: "studentCnic",
                            value: studentCnic,
                            placeholder: "CNIC or B-Form # without hyphenation",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Father’s Full Name",
                            name: "fatherName",
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
                            DisplayName: "Contact Number",
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
                            placeholder: "Your valid residential address",
                            changeData: this.changeData,

                            errors
                        }} />



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
                                DisplayName: "Highest Education Qualification",
                                name: "lastQualification",
                                id: "lastQualification",
                                changeData: this.changeData,
                                options: [
                                    {
                                        DisplayName: "Matric",
                                        value: "matric"
                                    }, {
                                        DisplayName: "Intermediate",
                                        value: "intermediate"
                                    }, {
                                        DisplayName: "Graduated",
                                        value: "graduated"
                                    }, {
                                        DisplayName: "Master",
                                        value: "master"
                                    }
                                ],
                                errors
                            }}
                        />
                        <div className="Rectangle-78">
                            <h1 className="label">Your headshot</h1>
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
                                    </div>
                                    <button type="button" className="Rectangle-62" onClick={() => this.refs.imagePicker.click()}>Select</button>
                                </div>
                            </div>
                            {errors.errorsObj["imagePicker"] && <p className="error"  >{errors.errorsObj["imagePicker"].message}</p>}
                        </div>



                        <button type="submit" className="Rectangle-60">Submit Application</button>
                    </form>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
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
