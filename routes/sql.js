// sets up the mysql connection so we can connect to the database
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'friend100',
	database: 'Leclado'
});

// initializes connection to database so we can make queries
connection.connect();

var array = new Array();

// queries the database to get every entry and store it in an array. array is then sent to geolocation.ejs and the page is rendered.
exports.geolocationform = function(req, res) {

    var tester = "Hello";
    var arr = new Array();
    
    connection.query('SELECT * FROM Leclado', function(err, rows) {
        for(i=0; i < rows.length; i++){
		   	var placemark = new Object();
		 	var location = rows[i];
	        placemark.lat = location.Latitude;
	        placemark.lng = location.Longitude;	
	        placemark.Name = location.Name;
            placemark.Description = location.Description;
	        arr[i] = placemark;
        }
  	res.render('geolocation.ejs', {arr: arr});
  	}); 
}

/* gets the data from geolocation.ejs and queries it into the database. redirects to geolocationform so that geolocation.ejs can be
   rendered with the updated database */
exports.addlocation = function(req, res){
	var lat = req.body.lat;
	var lng = req.body.lng; 
	var name = req.body.name;
    var description = req.body.description;

  
	connection.query('INSERT INTO Leclado (Name, Latitude, Longitude, Description) VALUES(?, ?, ?, ?)', [name, lat, lng, description], function(err){
		if (err){
			//res.write("Got error :-(" + err);
			console.log("Got error", err);
			res.send("error");
		}

	});
	
	res.redirect('/geolocationform');
}

exports.nearby = function(req, res){
	var lat = req.body.lat;
	var lng = req.body.lng;
	var arr = new Array();

	connection.query('SELECT * FROM Leclado WHERE Latitude > ? - .5 && Latitude < ? + .5 && Longitude > ? - .5 && Longitude < ? + .5', [lat, lat, lng, lng], function(err,rows){
		if (err){
			console.log("Got error", err);
			res.send("error");
		}
		for (i = 0; i < rows.length; i++)
		{
			var placemark = new Object();
		 	var location = rows[i];
	        placemark.lat = location.Latitude;
	        placemark.lng = location.Longitude;	
	        placemark.Name = location.Name;
            placemark.Description = location.Description;
	        arr[i] = placemark;
		}
		res.render('nearby.ejs', {arr: arr});
	});

};

