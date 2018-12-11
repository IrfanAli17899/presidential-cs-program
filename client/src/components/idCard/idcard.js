import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/assets/logo/piaic-green.svg';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    saylaniLogo: {
        width:'64px',
        marginLeft:'143px',
        marginTop:'10px',
        marginBottom:'6px',
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
        marginLeft: '16.6%',
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
        marginLeft: '9.5%',
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
        marginLeft: '18%',
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
        marginLeft: '25.5%',
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
        console.log("form data  ===>>",this.props.location.state)
        if (this.props.location.state) {
            let data = this.props.location.state
            let id = data._id;
            switch (true) {
                case (id < 10):
                    id = data.course + "0000" + id;
                    break;
                case (id < 100):
                    id = data.course + "000" + id;
                    break;
                case (id < 1000):
                    id = data.course + "00" + id;
                    break;
                case (id < 10000):
                    id = data.course + "0" + id;
                    break;
                default:
                    id = data.course + "" + id;

            }
            let studentData = this.props.location.state;

            switch (true) {
                case (studentData.course === "AIC"):
                    studentData.course = "Artificial Intelligence"
                    break;
                case (studentData.course === "BCC"):
                    studentData.course = "Block Chain"
                    break;
                case (studentData.course === "CNC"):
                    studentData.course = "Cloud Computing"
                    break;
                default:
            }
            this.setState({
                rollNo: id,
                studentData: studentData
            })
        } else {
            this.props.history.replace('/apply')
        }
    }
    // print
    print(){
        window.print();
    }
    render() {
        const { classes } = this.props;
        const { fullName, course, imageUrl } = this.state.studentData
        const rollNo = this.state.rollNo
        return (
            <div>
            <center><div style={{maxWidth: '1200px',minWidth: '300px',width: "100%",textAlign: "left"}}>
                {
                    (this.props.location.state) ?
                        <div >

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 mt-5">
                                        <div className="d-flex justify-content-center align-items-center">

                                            {/* Admit Card */}
                                            <Col className={classes.admitCardDiv}>
                                                {/* <div className={classes.admitCardDiv}> */}
                                                <img src={logo} alt="Saylani" className={classes.saylaniLogo}/>
                                                {/* <Typography variant="h5" className={classes.PIAIC}>PIAIC</Typography> */}
                                                <Typography className={classes.admitCardText}><b>Admit Card</b></Typography>
                                                {/* Student Photo */}
                                                <div className={classes.studentAdmitCardPhoto}>
                                                    <img src={imageUrl} alt="user-pic" style={{ width: '100%', height: '100%' }} />
                                                </div>
                                                {/* Roll No */}
                                                <div className={classes.studentAdmitCardRollNoDiv}>
                                                    <Typography className={classes.studentAdmitCardRollNoTxt}><b>Roll No:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardRollNoTxtValue}>{rollNo}</Typography>
                                                </div>
                                                {/* Full Name */}
                                                <div className={classes.studentAdmitCardRollNoDiv}>
                                                    <Typography className={classes.studentAdmitCardFullNameTxt}><b>Full Name:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardFullNameTxtValue}>{fullName}</Typography>
                                                </div>
                                                {/* Course */}
                                                <div className={classes.studentAdmitCardCouseDiv}>
                                                    <Typography className={classes.studentAdmitCardCourseTxt}><b>Course:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCourseTxtValue}>{course}</Typography>
                                                </div>
                                                {/* City */}
                                                <div className={classes.studentAdmitCardCityDiv}>
                                                    <Typography className={classes.studentAdmitCardCityTxt}><b>City:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCityTxtValue}>KHI</Typography>
                                                </div>
                                                {/* Authorized Signature */}
                                                <div>
                                                    <div className={classes.studentAdmitCardAuthorizeSignLine}></div>
                                                    <Typography className={classes.studentAdmitCardAuthorizeSignTxt}><b>Authorized Signature</b></Typography>
                                                </div>
                                                {/* </div> */}
                                            </Col>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-5">
                                        <div className="d-flex justify-content-center align-items-center">

                                            {/* Admit Card */}
                                            <Col className={classes.admitCardDiv}>
                                                {/* <div className={classes.admitCardDiv}> */}
                                                <img src={logo} alt="Saylani" className={classes.saylaniLogo}/>
                                                {/* <Typography variant="h5" className={classes.PIAIC}>PIAIC</Typography> */}
                                                {/* Student Photo */}
                                                <Typography className={classes.admitCardText}><b>Identity Card</b></Typography>
                                                <div className={classes.studentAdmitCardPhoto}>
                                                    <img src={imageUrl} alt="user-pic" style={{ width: '100%', height: '100%' }} />
                                                </div>
                                                {/* Roll No */}
                                                <div className={classes.studentAdmitCardRollNoDiv}>
                                                    <Typography className={classes.studentAdmitCardRollNoTxt}><b>Roll No:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardRollNoTxtValue}>{rollNo}</Typography>
                                                </div>
                                                {/* Full Name */}
                                                <div className={classes.studentAdmitCardRollNoDiv}>
                                                    <Typography className={classes.studentAdmitCardFullNameTxt}><b>Full Name:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardFullNameTxtValue}>{fullName}</Typography>
                                                </div>
                                                {/* Course */}
                                                <div className={classes.studentAdmitCardCouseDiv}>
                                                    <Typography className={classes.studentAdmitCardCourseTxt}><b>Course:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCourseTxtValue}>{course}</Typography>
                                                </div>
                                                {/* City */}
                                                <div className={classes.studentAdmitCardCityDiv}>
                                                    <Typography className={classes.studentAdmitCardCityTxt}><b>City:</b></Typography>
                                                    <Typography className={classes.studentAdmitCardCityTxtValue}>KHI</Typography>
                                                </div>
                                                {/* Authorized Signature */}
                                                <div>
                                                    <div className={classes.studentAdmitCardAuthorizeSignLine}></div>
                                                    <Typography className={classes.studentAdmitCardAuthorizeSignTxt}><b>Authorized Signature</b></Typography>
                                                </div>
                                                {/* </div> */}
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Instruction */}
                            <div id="pdfText">
                           
                            <Grid>
                                <Typography variant="h5" className={classes.instructions}><b>Instructions:</b></Typography>
                                <p>1) Bring a color copy of this document to your nearest PIAIC office for attestation.</p>
                                <p>2) Bring your original CNIC or B-Form.</p>
                                <p>3) Bring your original marksheet, certificate or degree from your latest qualification,<br />which you have mentioned form.</p>
                                <p>4) Admit Card & ID Card attestation dates are from 23rd to 30th December (Mon. to Sat. 9am to 7pm)</p>
                                <p>5) You will not be eligible to come to class without attestation of Admit Card from PIAC.</p>
                                <p>6) An orientation class will be arranged on Sunday, DEcember 24, 2018</p>
                                <div className={classes.buttonPrint}><Button onClick={this.print} block className={classes.printBtn} id="printButton" bsSize="large">Print</Button></div>
                            </Grid></div> </div>
                        :
                        // this.props.history.replace('/apply')
                        console.log('a')

                }
            </div></center></div>
        )
    }
}
Idcard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Idcard);