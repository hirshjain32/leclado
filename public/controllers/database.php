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
			// it should also render geolocation
			// but it needs to call some function to convert the new location
			// into a placemark to add to the map
            render("onsuccess.ejs");
		}
		
	}
	
?>