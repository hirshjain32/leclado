
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'friend100',
	database: 'Leclado'
});

connection.connect();

var array = new Array();

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
};

