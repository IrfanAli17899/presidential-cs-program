exports = module.exports = function(app,mongoose) {

  require('./home')(app,mongoose);
  require('./users')(app,mongoose);
  require('./form')(app,mongoose);
  require('./admitCard')(app,mongoose);
  require('./contactForm')(app,mongoose);
  require('./auth')(app,mongoose);
  require('./facebookauth')(app,mongoose);
}


