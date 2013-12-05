<?php
	require("functions.php");
	
	// if form was submitted
	if ($_SERVER["REQUEST_METHOD"] == "POST")
	{
	
		$lat = $_POST["lat"];
		$long = $_POST["long"];
		$name = $_POST["name"];

		// have we implemented query?
		$result = query("INSERT INTO leclado (name, lat, long) VALUES(?, ?, ?)", $name, $lat, $long);
		if ($result === false)
		{
			// location was not inserted
			// alerts the user
            // re-renders the geolocation page
			<script language = 'javascript'>
                alert('Your location failed to record.');
            </script>
            render("geolocation.ejs");
		}  
		else
		{
			// location was successfully inserted
			
            // calls a function that
            render("../public/controllers/makeplacemarks.php", ["lat" => $lat, "long" => $long]);
            
		}
		
	}
	
?>