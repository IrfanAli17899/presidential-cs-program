exports = module.exports = function (app, mongoose) {


    app.authMiddleware = function (req, res, next) {
        console.log("auth middle ware =====>>>>>")
        const LoggedinAdmin = app.db.models.loggedinAdmin;

        LoggedinAdmin.findOne({ databaseToken: req.body.databaseToken }).then(adminToken => {
            if (!adminToken) {
                return res.send({ sucess: false, message: "Unauthorize access please login and try again " })
            } else {
                next();
            }
        }).catch(err => {
            return res.send({ sucess: false, message: err.message })
        })


    }


}

