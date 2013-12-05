<?php

    // configuration
    require("functions.php");
    require("constants.php");
    
    
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

?>

