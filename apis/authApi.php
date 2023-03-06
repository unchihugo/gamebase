<?php
session_start();

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '1234';
$db_name = 'gamebase_db';

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle registration requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['action'] === 'register') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Hash the password for security
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  // Insert the new user into the database
  $stmt = $conn->prepare("INSERT INTO gebruiker (Gebruikersnaam, Wachtwoord) VALUES (?, ?)");
  $stmt->bind_param("ss", $username, $hashedPassword);
  $stmt->execute();

  header('Content-Type: application/json');
  echo json_encode(['success' => true]);
  exit;
}

// Handle login requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['action'] === 'login') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Get the user with the matching username from the database
  $stmt = $conn->prepare("SELECT * FROM gebruiker WHERE Gebruikersnaam = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();
  $user = $result->fetch_assoc();

  // Check if the user exists and the password is correct
  if ($user && password_verify($password, $user['Wachtwoord'])) {
    // Set the user ID as a session variable
    $_SESSION['userId'] = $user['id'];

    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
    exit;
  } else {
    http_response_code(401);
    exit;
  }
}

// Handle logout requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['action'] === 'logout') {
  // Clear the user ID session variable
  $_SESSION['id'] = null;

  header('Content-Type: application/json');
  echo json_encode(['success' => true]);
  exit;
}

// Handle user requests
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['action'] === 'user') {
  // Get the user ID from the session variable
  $userId = $_SESSION['id'];

  if ($userId) {
    // Get the user data from the database
    $stmt = $conn->prepare("SELECT * FROM gebruiker WHERE idGebruiker = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    header('Content-Type: application/json');
    echo json_encode(['idGebruiker' => $user['id'], 'Gebruikersnaam' => $user['username']]);
    exit;
  } else {
    http_response_code(401);
    exit;
  }
}

// Close the database connection
$conn->close();
?>