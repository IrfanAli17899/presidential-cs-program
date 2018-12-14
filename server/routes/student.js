exports = module.exports = function (app, mongoose) {

    var express = require('express');
    var router = express.Router();

    router.post('/find', function (req, res, next) {
        // console.log(req.body);

        const LoggedinAdmin = app.db.models.loggedinAdmin;

        LoggedinAdmin.findOne({ databaseToken: req.body.databaseToken }).then(adminToken => {
            app.log(adminToken);
            if (!adminToken) {
                return res.send({ sucess: false, message: "UnAuthorize" })
            }
            let body = {};

            body.empty = true;

            switch (req.body.type) {
                case ("rollNo"):
                    body.rollNo = req.body.value;
                    delete body.empty;
                    break;
                case ("CNIC"):
                    body.studentCnic = req.body.value;
                    delete body.empty;
                    break;
                case ("PhoneNumber"):
                    body.phoneNumber = req.body.value;
                    delete body.empty;
                    break;
            }

            {


                // if (req.body.rollInternal) {

                //     body.rollInternal = req.body.rollInternal;

                //     if (body.rollInternal && body.rollInternal == "") {
                //         return res.send({ success: false, message: "Please Provide The Correct Roll #" });
                //     }
                //     delete body.empty;

                // }

                // if (req.body.phoneNumber) {

                //     body.phoneNumber = req.body.phoneNumber

                //     if (body.phoneNumber && body.phoneNumber.length !== 11 || body.phoneNumber == "") {
                //         return res.send({ success: false, message: "Please Provide The Correct Phone Number" });
                //     }
                //     delete body.empty;
                // }
                // if (req.body.studentCnic) {

                //     body.studentCnic = req.body.studentCnic;

                //     if (body.studentCnic && body.studentCnic.length !== 13 || body.studentCnic === "") {
                //         return res.send({ success: false, message: "Please Provide The Correct CNIC or B-Form #" });
                //     }
                //     delete body.empty;

                // }
                // console.log(body);
            }

            if (body.empty) {
                return res.send({ success: false, message: "Please Provide Some Correct Information" });
            }
            const student = app.db.models.Student;

            student.findOne(body,
                {
                    studentCnic: 1,
                    fatherCnic: 1,
                    rollInternal: 1,
                    province: 1,
                    homeAddress: 1,
                    lastQualification: 1,
                    distanceLearning: 1,
                    dob: 1,
                    course: 1,
                    email: 1,
                    fatherName: 1,
                    fullName: 1,
                    phoneNumber: 1,
                    gender: 1,
                    studentCnic: 1,
                    city: 1,
                    province: 1,
                    imageUrl: 1,
                    signUpDate: 1,
                    rollNo: 1
                })
                .then(data => {
                    // app.log("Response from Student find >>> ", data);
                    // app.log("Response from Student find after parse >>> ", JSON.parse(JSON.stringify(data)));
                    if (!data) {
                        return res.send({ success: false, message: "Not Found" });
                    }
                    else {
                        let dataToSend = JSON.parse(JSON.stringify(data));
                        delete dataToSend._id;
                        return res.send({ success: true, userData: dataToSend });
                    }
                })
                .catch(err => {
                    return res.send({ success: false, message: "Not Found" })
                });

        })


    });

    router.post('/edit', function (req, res, next) {

        const LoggedinAdmin = app.db.models.loggedinAdmin;

        // console.log(body);
        LoggedinAdmin.findOne({ databaseToken: req.body.databaseToken }).then(adminToken => {

            if (!adminToken) {
                return res.send({ sucess: false, message: "UnAuthorize" })
            }

            let body = req.body.data;

            const student = app.db.models.Student;

            if (!body) {
                return res.send({ sucess: false, message: "Please Provide Some Information" });
            }

            student.findOneAndUpdate(
                { studentCnic: req.body.studentCnic },
                { $set: body },
                { new: true }
            )
                .then(data => {
                    if (!data) {
                        return res.send({ sucess: false, message: "Nothing is here Please Check Your Info" });
                    }
                    app.log(data);
                    res.send({ sucess: true, data });

                }).catch(err => {
                    return res.send({ sucess: false, error: err })

                })


        }).catch(err => {
            return res.send({ sucess: false, error: err })
        })


    });

    app.use('/student', router);

}

