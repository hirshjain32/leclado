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
			// we should figure out what to do in this case
		}  
		else
		{
			render("geolocation.ejs");	
			// this isn't going to do what it's supposed to do
		}
		
	}
	// don't we need a redirect here? perhaps to the home page?
?>