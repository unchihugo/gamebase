<?php
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '1234';
$db_name = 'gamebase_db';

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$fkUser = $_GET['fkUser'];

$sql = "SELECT * FROM gebruikergamedata WHERE fkGebruiker = $fkUser;";
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

