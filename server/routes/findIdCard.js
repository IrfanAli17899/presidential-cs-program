exports = module.exports = function (app, mongoose) {

    let express = require('express');
    let router = express.Router();
    let validator = require('validator');
    router.post('/', function (req, res, next) {
        console.log(req.body);
        let body = req.body;
        if (!body.studentCnic) {
            return res.send({success:false, message: "Please Provide Your CNIC or B-Form #" });
        }
        if (!body.email) {
            return res.send({success:false, message: "Please Provide Your Email Name" });
        }        
        if (!body.contactNumber) {
            return res.send({success:false, message: "Please Provide Your Phone Number" });
        }
        if(!validator.isNumeric(body.contactNumber)){
            return res.send({success:false, message: "Please Provide a Valid Phone Number" });
        }

        const student = app.db.models.Student;
        student.findOne({ email: body.email,phoneNumber:body.contactNumber, studentCnic: body.studentCnic},
            {   distanceLearning: 1, 
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
                rollNo: 1
             })
             .then(data => {
                app.log("Response from Student find >>> ",data);
                app.log("Response from Student find after parse >>> ",JSON.parse(JSON.stringify(data)));
                if (!data) {
                    return res.send({success: false, message: "Not Found" });
                }
                else {
                    return res.send({success: true, userData: JSON.parse(JSON.stringify(data))});
                }
            })
            .catch(err => {
                return res.send({success: false, message: "Not Found" })
            });
    });

    app.use('/findidcard', router);

}

