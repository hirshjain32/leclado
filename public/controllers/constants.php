<?php

    /**
     * constants.php
     *
     * Adapted from Computer Science 50
     * Problem Set 7
     *
     * Global constants.
     * we're going to need to change these constant values 
     * once we set up the SQL server
     */

    // the max distance between a user and locations
    // that will be displayed on the map
    // sets max distance to ten miles
    define("MAXDISTANCE", 10)
    
    // our database's name
    define("DATABASE", "leclado");

    // our database's password
    // you should change this to your actual password
    // that you set as your sql database password
    // before you try to query
    define("PASSWORD", "friend100");

    // our database's server
    define("SERVER", "localhost");

    // our database's username
    define("USERNAME", "root");

?>
