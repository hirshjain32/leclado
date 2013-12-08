
/**
 * Module dependencies.
 */

// sets up path for particular calls
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var sql = require('./routes/sql.js')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// get and post to specific pages and calls functions in sql.js and index.js
app.get('/', routes.index);
app.get('/home', routes.home);
app.get('/users', user.list);
app.post('/addlocation', sql.addlocation);
app.get('/geolocationform', sql.geolocationform);

// when node app called, creates port on localhost
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

