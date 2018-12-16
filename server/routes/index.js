exports = module.exports = function (app, mongoose) {

  require('./authMiddleware')(app, mongoose);

  app.use("/admin",app.authMiddleware);

  require('./home')(app, mongoose);
  require('./users')(app, mongoose);
  require('./form')(app, mongoose);
  require('./admitCard')(app, mongoose);
  require('./contactForm')(app, mongoose);
  require('./auth')(app, mongoose);
  require('./facebookauth')(app, mongoose);
  require('./findIdCard')(app, mongoose);
  require('./student')(app, mongoose);
  require('./adminAuth')(app, mongoose);
  require('./imageUpload')(app, mongoose);

}


