<?php
	require("functions.php");
    require("constants.php");
	
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
			
            // returns all rows of history for user
            $rows = query("SELECT * FROM leclado WHERE distance(?, ?, lat, long) <= MAXDISTANCE", $lat, $long);
            
            // saves the values in these rows in an array
            foreach ($rows as $row)
            {
                $placemarks[] = [
                "lat" => $row["lat"],
                "long" => $row["long"],
                ]
            }
            
            
            // render map
            // currently renders to onsuccess.ejs
            //
            render("onsuccess.ejs", ["placemarks" => $placemarks]);
            
		}
		
	}
    else
    {
        render("geolocation.ejs");
    }
	
?>