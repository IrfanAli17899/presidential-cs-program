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


        // console.log(app.db.models.Student);



        if (!req.file) {
            return res.status(400).send({ message: "Please Provide Your Image" });
        }
        if (!body.fatherName || body.homeAddress.length < 3) {
            return res.status(400).send({ message: "Please Provide Your Father Name" });
        }
        if (!body.fullName || body.homeAddress.length < 3) {
            return res.status(400).send({ message: "Please Provide Your Full Name" });
        }
        if (!body.email) {
            return res.status(400).send({ message: "Please Provide Your Email" });
        }
        if (!body.course || body.course.length < 3) {
            return res.status(400).send({ message: "Please Provide Your course" });
        }
        if (!body.phoneNumber || !validator.isNumeric(body.phoneNumber)) {
            return res.status(400).send({ message: "Please Provide Your Phone Number" });
        }
        if (!body.gender || body.gender !== "male" && body.gender !== "female") {
            return res.status(400).send({ message: "Please Provide Your gender" });
        }
        if (!body.homeAddress || body.homeAddress.length < 6) {
            return res.status(400).send({ message: "Please Provide Your Valid Home Address" });
        }
        if (!body.lastQualification) {
            return res.status(400).send({ message: "Please Provide Your Last Qualification" });
        }
        if (!body.studentCnic || !validator.isNumeric(body.studentCnic)) {
            return res.status(400).send({ message: "Please Provide Your Cnic" });
        }
        if (!body.dob) {
            return res.status(400).send({ message: "Please Provide Your Date of Birth" });
        }
        if (!body.fatherNameCnic || !validator.isNumeric(body.fatherNameCnic))
            if (!body.databaseToken) {
                return res.status(401).send({ message: "You Are Not Allowed To Continue" });
            }




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

                    const newStudent = new app.db.models.Student(body);

                    newStudent.save().then(regData => {
                        console.log("registration data");
                        console.log(regData);

                        const UserSchema = app.db.models.User;
                        let id = regData.userId;
                        console.log(id);
                        UserSchema.findOneAndUpdate({ _id: id }, { $set: { submitted: true } }, { new: true })
                            .then(response => {

                                console.log(response);
                                res.status(200).send(regData);

                            })
                        console.log("from route")

                        // res.status(200).send(regData);

                    }).catch(err => {
                        console.log(err)
                        res.status(400).send(err);
                    });

                });

            }
        })

        // cloudinary.v2.uploader.upload(req.file.path, {
        //     secure: true,
        //     transformation:
        //         [
        //             { width: 150, height: 150 }
        //         ]
        // }, (err, imgData) => {

        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send({ message: err.message });
        //     }

        //     console.log(imgData.secure_url);

        //     body.imageUrl = imgData.secure_url;

        //     const newStudent = new app.db.models.Student(body);

        //     newStudent.save().then(x => {
        //         console.log(x);
        //         console.log("from route")
        //         res.status(200).send(x);
        //     }).catch(err => {
        //         console.log(err)
        //         res.status(400).send(err);
        //     });

        // });
        // console.log("image==>>2")

    });


    app.use('/form', router);

}

