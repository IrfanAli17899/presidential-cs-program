exports = module.exports = function (app, mongoose) {

    require('./user')(app, mongoose);
    require('./student')(app, mongoose);
    require('./contactFrom')(app, mongoose);
    require('./loggedinUser')(app, mongoose);
    require('./loggedinadmin')(app, mongoose);
    require('./admin')(app, mongoose);
    require('./role')(app, mongoose);


}
