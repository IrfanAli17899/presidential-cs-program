exports = module.exports = function (app, mongoose) {

    var express = require('express');
    var router = express.Router();

    router.post('/find', function (req, res, next) {
        // console.log(req.body);


        let body = {};

        body.empty = true;

        switch (req.body.type) {
            case ("rollNo"):
                body.rollNo = req.body.value;
                delete body.empty;
                break;
            case ("cnic"):
                body.studentCnic = req.body.value;
                delete body.empty;
                break;
            case ("phoneNumber"):
                body.phoneNumber = req.body.value;
                delete body.empty;
                break;
            case ("email"):
                body.email = req.body.value;
                delete body.empty;
                break;
        }


        if (body.empty) {
            return res.send({ success: false, message: "Please Provide Some Correct Information" });
        }
        const student = app.db.models.Student;

        student.findOne(body)
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




    });

    router.post('/edit', function (req, res, next) {


        // console.log(body);


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
                    return res.send({ sucess: false, message: "Unable To Update Please Check Your Provided Info" });
                }
                app.log(data);
                res.send({ sucess: true, data });

            }).catch(err => {
                return res.send({ sucess: false, message: err.message })

            })





    });





    app.use('/admin/student', router);


}

