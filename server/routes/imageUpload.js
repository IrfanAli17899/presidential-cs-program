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


    router.post('/', upload.single("image"), function (req, res, next) {

        if (req.imgError) {
            return res.send({ success: false, message: "Please Provide A Valid Image" })
        }

        const LoggedinAdmin = app.db.models.loggedinAdmin;

        LoggedinAdmin.findOne({ databaseToken: req.body.databaseToken }).then(adminToken => {
            if (!adminToken) {
                return res.send({ sucess: false, message: "Unauthorize access please login and try again " })
            }

            console.log(req.body)

            // res.send({ success: true, message: req.file.path, body: req.body });

            cloudinary.v2.uploader.upload(req.file.path, {
                secure: true,
                transformation:
                    [{ width: 150, height: 150 }]
            },
                (err, imgData) => {
                    if (err) {
                        console.log(err);
                        // change it to unable to process your image, please try again
                        return res.send({ success: false, message: "Unable to process the image, please try again" });
                    }

                    console.log(imgData.secure_url);

                    res.send({ success: true, message: "Uploaded", imageUrl: imgData.secure_url });

                    // saveUserData(req, res, imgData);
                });



        }).catch(err => {
            return res.send({ sucess: false, message: err.message })
        })





    });



    app.use('/image', router);

}

