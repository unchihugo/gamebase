<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '1234';
$db_name = 'gamebase_db';

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM gebruikergamedata;";
$result = mysqli_query($conn, $sql);

$data = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

echo json_encode($data);

mysqli_close($conn);
?>

