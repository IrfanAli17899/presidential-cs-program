exports = module.exports = function (app, mongoose) {

    const multer = require('multer');

    const cloudinary = require('cloudinary');

    const validator = require('validator');

    var storage = multer.diskStorage({
        filename: function (req, file, callback) {
            callback(null, Date.now() + file.originalname);
        }
    });
    var imageFilter = function (req, file, cb) {
        // accept image files only
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {

            req.imgError = true;
            // return cb(new Error("Only image files are allowed!"), true);
        }
        cb(null, true);
    };
    var upload = multer({ storage: storage, fileFilter: imageFilter });

    cloudinary.config({
        cloud_name: app.get('cloud_name'),
        api_key: app.get('api_key'),
        api_secret: app.get('api_secret')
    });
    var express = require('express');
    var router = express.Router();

    /* POST users listing. */
    router.post('/', upload.single("image"), function (req, res) {

        if (req.imgError) {
            return res.status(400).send({ message: "Please Provide A Valid Image" })
        }
        const body = req.body;

        if (!req.file) {
            return res.send({ success: false, message: "Please Provide Your Image" });
        }
        if (!body.fatherName || body.fatherName.length < 3) {
            return res.send({ success: false, message: "Please Provide Your Father Name" });
        }
        if (!body.fullName || body.fullName.length < 3) {
            return res.send({ success: false, message: "Please Provide Your Full Name" });
        }
        if (!body.email) {
            return res.send({ success: false, message: "Please Provide Your Email" });
        }
        if (!body.course || body.course.length !== 3) {
            return res.send({ success: false, message: "Please Provide Your course" });
        }
        if (!body.phoneNumber || !validator.isNumeric(body.phoneNumber)) {
            return res.send({ success: false, message: "Please Provide Your Phone Number" });
        }
        if (!body.gender || body.gender !== "male" && body.gender !== "female") {
            return res.send({ success: false, message: "Please Provide Your gender" });
        }
        if (!body.homeAddress || body.homeAddress.length < 6) {
            return res.send({ success: false, message: "Please Provide Your Valid Home Address" });
        }
        if (!body.lastQualification) {
            return res.send({ success: false, message: "Please Provide Your Last Qualification" });
        }
        if (!body.studentCnic || !validator.isNumeric(body.studentCnic)) {
            return res.send({ success: false, message: "Please Provide Your Cnic" });
        }
        if (!body.dob) {
            return res.send({ success: false, message: "Please Provide Your Date of Birth" });
        }
        if (!body.fatherCnic || !validator.isNumeric(body.fatherCnic)) {
            return res.send({ success: false, message: "Please Provide Your valid father Cnic" });
        }
        if (body.fatherNameCnic === body.studentCnic) {
            return res.send({ success: false, message: "Please Provide A Seprate  Father / Student Cnic" });
        }
        /*
        if (!body.databaseToken) {
            return res.status(401).send({ message: "You Are Not Allowed To Continue" });
        }
        */

       uploadImage(req,res);

            /*
        let databaseToken = body.databaseToken;


        const loggedinUsers = app.db.models.loggedinUser;

        loggedinUsers.findOne({ databaseToken: databaseToken }).then(data => {
            if (!data) {
                return res.status(401).send({ message: "Invalid Token" })
            }
            else {

                console.log(databaseToken);

                delete body['databaseToken'];

                // console.log(body);

                // console.log("withdata =>", data);

                cloudinary.v2.uploader.upload(req.file.path, {
                    secure: true,
                    transformation:
                        [
                            { width: 150, height: 150 }
                        ]
                }, (err, imgData) => {

                    if (err) {
                        console.log(err);
                        return res.status(500).send({ message: err.message });
                    }

                    console.log(imgData.secure_url);

                    body.imageUrl = imgData.secure_url;

                    var StudentSchm = app.db.models.Student;
                    StudentSchm.nextCount(function (err, count) {
                        body.rollNo = createRollNo(count, body.course);
                        console.log(body);

                        const newStudent = new app.db.models.Student(body);

                        newStudent.save().then(regData => {
                            console.log("registration data");
                            console.log(regData);

                            const UserSchema = app.db.models.User;
                            let id = regData.userId;
                            console.log(id);
                            UserSchema.findOneAndUpdate({ _id: id }, { $set: { formSubmitted: true } }, { new: true })
                                .then(response => {
                                    console.log(response);
                                    loggedinUsers.findOneAndDelete({ databaseToken: databaseToken })
                                        .then(tokenRes => {
                                            res.status(200).send(regData);
                                        })
                                })
                            console.log("from route")

                            // res.status(200).send(regData);

                        }).catch(err => {
                            console.log(err)
                            if (err.code == 11000) {
                                return res.send({ success: false, message: err });
                            }
                            res.status(400).send(err);
                        });
                    });



                });

            }
        });*/

    });

    function uploadImage(req, res){
        cloudinary.v2.uploader.upload(req.file.path, {
            secure: true,
            transformation:
                [{ width: 150, height: 150 }]
        }, 
        (err, imgData) => {
            if (err) {
                console.log(err);
                // change it to unable to process your image, please try again
                return res.send({ success: false, message: err.message });
            }
            console.log(imgData.secure_url);
            saveUserData(req,res,imgData);
        });
    }

    function saveUserData(req, res, imgData){
        console.log("in saveUserData");
        var body = req.body;
        body.imageUrl = imgData.secure_url;
        var StudentSchema = app.db.models.Student;
        StudentSchema.nextCount(function (err, count) {
            body.rollNo = createRollNo(count, body.course);
            console.log(body);
            const newStudent = new app.db.models.Student(body);
            newStudent.save().then(regData => {
                console.log("registration data >> ",regData);
                res.status(200).send({success:true , userData:regData});
            })
            .catch(err => {
                // manage errors
                console.log(err)
                if (err.code == 11000) {
                    return res.send({ success: false, message: "You have provided information which already exists, Please try again" });
                }
                res.send({ success: false, message: "Unknown error, Please try again" });
            });
        });
    }


    function createRollNo(count, course) {
        let rollNo;
        switch (true) {
            case (count < 10):
                return rollNo = course + "00000" + count;
                break;
            case (count < 100):
                return rollNo = course + "0000" + count;
                break;
            case (count < 1000):
                return rollNo = course + "000" + count;
                break;
            case (count < 10000):
                return rollNo = course + "00" + count;
                break;
            case (count < 100000):
                return rollNo = course + "0" + count;
                break;
            default:
                return rollNo = course + "" + count;
        }
    }

    app.use('/form', router);

}

