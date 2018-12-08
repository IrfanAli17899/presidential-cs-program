require('sqreen');
var express = require('express');

var path   = require('path');
var app    = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/build'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', express.static(__dirname + '/build')); // set the static files location /public/img will be /img for users


app.listen(app.get('port'),function(){
  console.log('Express server listening on port ' + app.get('port'));
});
process.on('uncaughtException', function (exception) {
       console.log(exception);
});