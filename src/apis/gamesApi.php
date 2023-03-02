<?php
$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="1234";
$dbname="gamebase_db";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

$sql = "SELECT * FROM game;";
$result = mysqli_query($conn, $sql);

$games = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $games[] = $row;
    }
}

echo json_encode($games);

mysqli_close($conn);
?>
