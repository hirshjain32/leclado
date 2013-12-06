
/**
 * Module dependencies.
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'friend100',
});

connection.connect();

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/geolocation',routes.geo);
app.get('/onsuccess',routes.onsuccess);
app.get('/database', routes.database);

app.post('/addlocation', function(req, res){
	var lat = req.body.lat;
	var lng = req.body.lng; 
	var name = req.body.name; 
	var obj = {
		name: name,
		lat: lat,
		lng: lng,
	};
	connection.query('INSERT INTO Leclado (Name, Latitude, Longitude) VALUES("it works!", 10, 10)', function(err,results){
		if (err){
			res.write("Got error :-(" + err);
		}		
	});
});

connection.end();


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
