<?php
	require("functions.php");
	
	// if form was submitted
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
	
		$lat = $_SESSION["lat"];
		$long = $_SESSION["long"];
		$name = $_POST["name"];

		// have we implemented query?
		$result = query("INSERT INTO leclado (name, lat, long) VALUES(?, ?, ?)", $name, $lat, $long);
		if ($result === false)
		{
			// location was not inserted
			// re-renders the geolocation page
			// our "render" function is going to need some work
			// right now it renders php files 
			// but it presumably won't work on ejs files
			render("geolocation.ejs"); 
		}  
		else
		{
			// location was successfully inserted
			// it should also render geolocation
			// but it needs to call some function to convert the new location
			// into a placemark to add to the map		
		}
		
	}
	
?>