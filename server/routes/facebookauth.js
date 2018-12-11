exports = module.exports = function (app, mongoose) {

    var express = require('express');
    var router = express.Router();
    var axios = require('axios');
    var jwt = require('jsonwebtoken');
    var lodash = require('lodash');

    router.post('/', async function (req, res, next) {
        let { id, accessToken } = req.body;

        let fbId = id;

        axios.get(`https://graph.facebook.com/${fbId}?fields=id,name,email&access_token=${accessToken}`)
            .then(response => {

                const data = response.data;

                delete data['id'];

                console.log("facebook ========", data);

                const UserSchema = app.db.models.User;

                UserSchema.findOne({ facebookId: fbId }).then(response => {


                    if (!response) {

                        data.facebookId = fbId;

                        return createUser(req, res, data, UserSchema);

                    }

                    let userData = JSON.parse(JSON.stringify(response));


                    if (!userData.submitted) {

                        console.log("submited")

                        return sendUserDataWithToken(req, res, userData);

                    }
                    else {
                        return sendFormData(req, res, userData);
                    }

                })

            })
            .catch(err => {

                return res.status(400).send(err.response.data.error);

            })

    });









    //Helper Functions


    function createUser(req, res, data, UserSchema) {

        const User = new UserSchema(data);

        return User.save()
            .then(userData => {

                console.log("new user  ==>", userData);

                return genrateToken(req, res, userData);

            }).catch(err => {
                // console.log(err);
                return res.status(400).send(err);

            })


    }



    function sendUserDataWithToken(req, res, userData) {

        console.log("Send User DAta with Token ==>", userData);

        return genrateToken(req, res, userData);

    }







    function genrateToken(req, res, userData) {

        let newUserData = JSON.parse(JSON.stringify(userData));

        newUserData.userId = userData._id;

        newUserData.databaseToken = jwt.sign({ facebookId: newUserData.facebookId, userId: newUserData.userId }, "somemagicalwords");

        delete newUserData['_id'];

        // console.log("newUSer==>>", data);


        const loggedinUser = new app.db.models.loggedinUser(newUserData);

        return loggedinUser.save()
            .then(loggedinUserData => {

                console.log(loggedinUserData);

                let dataToSend = JSON.parse(JSON.stringify(loggedinUserData));

                dataToSend.submitted = false;

                return res.status(200).send(dataToSend);

            }).catch(err => {

                return res.status(400).send(err);

            });
    }


    function sendFormData(req, res, userData) {

        const Student = app.db.models.Student;

        return Student.findOne({ userId: userData._id })

            .then(sumittedForm => {

                console.log('Submited Data ==>', sumittedForm);

                let dataToSend = JSON.parse(JSON.stringify(sumittedForm));

                dataToSend.submitted = true;

                return res.status(200).send(dataToSend);

            })
            .catch(err => {
                return res.status(500).send(err);
            })
    }

    app.use('/facebookauth', router);

}

