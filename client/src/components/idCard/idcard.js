import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/assets/logo/piaic-green.svg';
import './idCard.css';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    saylaniLogo: {
        width: '64px',
        marginLeft: '143px',
        marginTop: '10px',
        marginBottom: '6px',
    },
    mainCardDiv: {
        marginTop: '4%',
    },
    // Student Admit Card
    admitCardMainDiv: {
    },
    admitCardDiv: {
        marginTop: '2%',
        border: '2px solid black',
        borderWidth: '5px 2px 5px 2px',
        borderColor: '#00ce9f #707070 #00ce9f #707070',
        width: '350px',
        // marginLeft: '10%'
    },
    PIAIC: {
        color: '#008C79',
        textAlign: 'center',
        marginTop: '2%'
    },
    admitCardText: {
        color: '#00ce9f',
        textAlign: 'center',
        fontFamily: 'George',
        fontWeight: '600',
        marginTop: '2%'
    },
    studentAdmitCardPhoto: {
        marginTop: '3%',
        margin: '0 auto',
        width: '160px',
        height: '170px',
        border: '2px solid #B7B7B7',
    },
    studentAdmitCardRollNoDiv: {
        marginTop: '4%',
    },
    studentAdmitCardRollNoTxt: {
        display: 'inline',
        color: '#017969',
        marginLeft: '10%',
        marginTop: '3%',
        fontFamily: 'George',
        fontSize: '16px',
    },
    studentAdmitCardRollNoTxtValue: {
        color: '#00DBA0',
        marginLeft: '3%',
        fontFamily: 'George',
        fontWeight: '600',
        display: 'inline',
        fontSize: '16px',
    },
    studentAdmitCardFullNameDiv: {
        marginTop: '4%',
    },
    studentAdmitCardFullNameTxt: {
        display: 'inline',
        color: '#017969',
        marginLeft: '10%',
        marginTop: '3%',
        fontFamily: 'George',
        fontSize: '16px',
    },
    studentAdmitCardFullNameTxtValue: {
        color: '#00DBA0',
        marginLeft: '3%',
        fontFamily: 'George',
        fontWeight: '600',
        display: 'inline',
        fontSize: '16px',
    },
    studentAdmitCardCouseDiv: {
        marginTop: '4%',
    },
    studentAdmitCardCourseTxt: {
        display: 'inline',
        color: '#017969',
        marginLeft: '10%',
        marginTop: '3%',
        fontFamily: 'George',
        fontSize: '16px',
    },
    studentAdmitCardCourseTxtValue: {
        color: '#00DBA0',
        marginLeft: '3%',
        fontFamily: 'George',
        fontWeight: '600',
        display: 'inline',
        fontSize: '16px',
    },
    studentAdmitCardCityDiv: {
        marginTop: '4%',
    },
    studentAdmitCardCityTxt: {
        display: 'inline',
        color: '#017969',
        marginLeft: '10%',
        marginTop: '3%',
        fontFamily: 'George',
        fontSize: '16px',
    },
    studentAdmitCardCityTxtValue: {
        color: '#00DBA0',
        marginLeft: '3%',
        fontFamily: 'George',
        fontWeight: '600',
        display: 'inline',
        fontSize: '16px',
    },
    studentAdmitCardCityTxtValue2: {
        color: '#00DBA0',
        marginLeft: '3%',
        fontFamily: 'George',
        fontWeight: '600',
        display: 'inline',
        fontSize: '16px',
    },
    studentAdmitCardAuthorizeSignLine: {
        marginTop: '18%',
        width: '60%',
        border: '1px solid #E2E2E2',
        margin: '0 auto',
    },
    studentAdmitCardAuthorizeSignTxt: {
        marginTop: '1%',
        color: '#017969',
        textAlign: 'center',
        fontSize: '16px',
    },

    instructions: {
        color: '#017969',
        marginTop: '6%',
    },
    buttonPrint: {
        margin: '0 auto',
    },
    printBtn: {
        marginTop: '4%',
        marginBottom: '5%',
        backgroundColor: '#00DBA0',
        color: 'white',
        maxWidth: '20%',
        margin: '0 auto'
    }
})

class Idcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formSubmitted: false,
            rollNo: undefined,
            studentData: {}
        }
        this.print = this.print.bind(this);
    }
    componentWillMount() {
        console.log("form data  ===>>", this.props.location.state)
        if (this.props.location.state) {
            let data = this.props.location.state

            let studentData = this.props.location.state;

            switch (true) {
                case (studentData.course === "AIC"):
                    studentData.course = "Artificial Intelligence"
                    break;
                case (studentData.course === "BCC"):
                    studentData.course = "Blockchain"
                    break;
                case (studentData.course === "CNC"):
                    studentData.course = "Cloud Computing"
                    break;
                default:
            }
            this.setState({
                rollNo: studentData.rollNo,
                studentData: studentData
            })
        } else {
            this.props.history.replace('/apply')
        }
    }
    // print
    print() {
        window.print();
    }
    render() {
        const { classes } = this.props;
        const { fullName, course, imageUrl,distanceLearning,city } = this.state.studentData

        const rollNo = this.state.rollNo
        return (
            <div>
                <center>
                    <div style={{ maxWidth: '1200px', minWidth: '300px', width: "100%", textAlign: "left" }}>
                    <div >
                     
                           
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 mt-5">
                                        <div className="d-flex justify-content-center align-items-center">
                                        <div className="cardBody">
                                                <div className="row" style={{margin: 0,maxHeight: 280}}>
                                                    <div className="col-8 ">
                                                    <img src={logo} alt="Saylani" className="logoImage"/>
                                                    <div className="logoForm">
                                                            <p><b>Roll No:</b> {rollNo}</p>
                                                            <p><b>Full Name:</b> {fullName}</p>
                                                            <p><b>Course:</b> {course}</p>
                                                            <p><b>Distance Learning:</b> {distanceLearning ? "Yes" : "No"}</p>
                                                            <p><b>City:</b> {city}</p>
                                                    </div>
                                                    </div>
                                                    <div className="col-4 " style={{padding: 0}}>
                                                    <div className="cardImage" style={{width:"100%",height:"50%",backgroundImage:`url(${imageUrl})`,backgroundPosition:"center",backgroundSize: "cover"}}></div>
                                                    <div className="UserAuthCard">
                                                            <p><b>Authorized Signature</b> </p>

                                                    </div>
                                                    </div>
                                                </div>
                                       </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-5">
                                        <div className="d-flex justify-content-center align-items-center">

                                            {/* <Col className={classes.admitCardDiv}>
                                                <img src={logo} alt="Saylani" className={classes.saylaniLogo}/>
                                                <Typography className={classes.admitCardText}><b>Identity Card</b></Typography>
                                                <div className={classes.studentAdmitCardPhoto}>
                                                <div style={{width:"100%",height:"100%",backgroundImage:`url(${imageUrl})`,backgroundPosition:"center",backgroundSize: "cover"}}></div>
                                                </div>
                                                
                                                <div className={classes.studentAdmitCardRollNoDiv}>
                                                    <Typography className={classes.studentAdmitCardRollNoTxt}><b>Roll No:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardRollNoTxtValue}>{rollNo}</Typography>
                                                </div>
                                                <div className={classes.studentAdmitCardRollNoDiv}>
                                                    <Typography className={classes.studentAdmitCardFullNameTxt}><b>Full Name:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardFullNameTxtValue}>{fullName}</Typography>
                                                </div>
                                                <div className={classes.studentAdmitCardCouseDiv}>
                                                    <Typography className={classes.studentAdmitCardCourseTxt}><b>Course:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCourseTxtValue}>{course}</Typography>
                                                </div>
                                                <div className={classes.studentAdmitCardCityDiv}>
                                                    <Typography className={classes.studentAdmitCardCityTxt}><b>Distance Learning:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCityTxtValue2}>{distanceLearning ? "Yes" : "No"}</Typography>
                                                </div>
                                                <div className={classes.studentAdmitCardCityDiv}>
                                                    <Typography className={classes.studentAdmitCardCityTxt}><b>City:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCityTxtValue}>{city}</Typography>
                                                </div>
                                                <div>
                                                    <div className={classes.studentAdmitCardAuthorizeSignLine}ssss></div>
                                                    <Typography className={classes.studentAdmitCardAuthorizeSignTxt}><b>Authorized Signature</b></Typography>
                                                </div>
                                            </Col>
                                        */}
                                       <div className="cardBody">
                                                <div className="row" style={{margin: 0,maxHeight: 280}}>
                                                    <div className="col-8 ">
                                                    <img src={logo} alt="Saylani" className="logoImage"/>
                                                    <div className="logoForm">
                                                    <p><b>Roll No:</b> {rollNo}</p>
                                                            <p><b>Full Name:</b> {fullName}</p>
                                                            <p><b>Course:</b> {course}</p>
                                                            <p><b>Distance Learning:</b> {distanceLearning ? "Yes" : "No"}</p>
                                                            <p><b>City:</b> {city}</p>
                                                    </div>
                                                    </div>
                                                    <div className="col-4 " style={{padding: 0}}>
                                                    <div className="cardImage" style={{width:"100%",height:"50%",backgroundImage:`url(${imageUrl})`,backgroundPosition:"center",backgroundSize: "cover"}}></div>
                                                    <div className="UserAuthCard">
                                                            <p><b>Authorized Signature</b> </p>

                                                    </div>
                                                    </div>
                                                </div>
                                       </div>
                                       

                                        </div>
                                    </div>
                                </div>


                            {/* Instruction */}
                            <div id="pdfText">
                           
                            <Grid>
                                <Typography variant="h5" className={classes.instructions}><b>Instructions:</b></Typography>
                                <p>1) Bring two color copies of this document for attestation.</p>
                                <p>2) Bring your original CNIC or B-Form. Also bring 2 copies of CNIC or B-Form.</p>
                                <p>3) Bring your original marksheet, certificate or degree from your highest qualification,<br />which you have mentioned in the application form. Also bring 2 copies of marksheet, certificate or degree.</p>
                                <p>4) The last date for admit card & ID Card attestation is January 1, 2019.</p>
                                <p>5) You will not be eligible to come to the entry test or classes without attestation of admit card from PIAIC.</p>
                                <p>6) For attestation please visit </p>
                                <div className={classes.buttonPrint}><Button onClick={this.print} block className={classes.printBtn} id="printButton" bsSize="large">Print</Button></div>
                            </Grid></div> </div>
                       

                </div>
                    
                </div>
                </center>
                </div>
        )
    }
}
Idcard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Idcard);