exports = module.exports = function (app, mongoose) {

    var express = require('express');
    var router = express.Router();
    var { SHA256 } = require('crypto-js');
    var jwt = require('jsonwebtoken')
    /* GET users listing. */
    router.post('/', function (req, res, next) {

        let body = req.body;
        console.log(body);
        body.password = SHA256(JSON.stringify(body.password) + "someMgicalWords").toString();

        // res.send(body);

        const AdminTable = app.db.models.admin;

        // AdminTable.save().then(data => {
        //     res.send(data);
        // })

        AdminTable.findOne({ userName: body.userName, password: body.password }).then(data => {

            if (!data) {
                return res.send({ sucess: false, message: "Please Provide A Valid UserName Password" })
            }

            let userData = data;

            console.log(userData)


            databaseToken = jwt.sign({ userName: userData.userName, _id: userData._id }, "somemagicalwords");

            let tokenTableData = { databaseToken, userName: userData.userName, adminId: userData._id }


            // console.log(tokenData);

            const LoggedinAdmin = new app.db.models.loggedinAdmin(tokenTableData);

            LoggedinAdmin.save().then(tokenData => {

                console.log(tokenData)

                return res.send({ sucess: true, tokenData });

            }).catch(err => {
                res.send(err);
            })


        }).catch(err => {

            res.send(err);

        })



    });


    app.use('/login', router);

}

