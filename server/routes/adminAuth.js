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

            LoggedinAdmin.save().then(userData => {

                app.log(userData)

                const role = app.db.models.Role;

                role.find({ roles: "SuperAdmin" }).then(roleData => {

                    console.log(roleData);

                    if (!roleData) {
                        return res.send({ success: true, userData, routes: [] });

                    }

                    let routes = [];
                    
                    roleData.map(data => {
                        routes.push(data.path);
                    })
                    app.log(routes);

                    return res.send({ success: true, userData: userData, routes: routes });

                })


            }).catch(err => {
                res.send({ success: false, message: err.message });
            })


        }).catch(err => {

            res.send({ success: false, message: err.message });

        })



    });


    app.use('/adminauth', router);

}

