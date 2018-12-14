exports = module.exports = function (app, mongoose) {


    var express = require('express');
    var router = express.Router();
    var { SHA256 } = require('crypto-js');
    var jwt = require('jsonwebtoken')
    /* GET users listing. */
    router.post('/', function (req, res, next) {

        let body = req.body;

        console.log(body);

        body.password = SHA256(JSON.stringify(body.password) + app.get('jwtsalt')).toString();

        // res.send(body);

        const admin = app.db.models.Admin;

        // admin.save().then(data => {
        //     res.send(data);
        // })

        admin.findOne({ userName: body.userName, password: body.password }).then(data => {

            if (!data) {
                return res.send({ sucess: false, message: "Please Provide A Valid UserName or Password" })
            }

            let userData = data;

            app.log(userData);


            databaseToken = jwt.sign({ userName: userData.userName, _id: userData._id }, app.get('jwtsalt'));

            let tokenTableData = { databaseToken, userName: userData.userName, adminId: userData._id }


            // console.log(tokenData);

            const LoggedinAdmin = new app.db.models.loggedinAdmin(tokenTableData);

            LoggedinAdmin.save().then(tokenData => {

                app.log(tokenData)

                return res.send({ sucess: true, tokenData });

            }).catch(err => {
                res.send({ success: false, message: err.message });
            })


        }).catch(err => {

            res.send({ success: false, message: err.message });

        })



    });


    app.use('/adminauth', router);

}

