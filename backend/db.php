<?php
include 'cors.php';
$host = '127.0.0.1';
$user = 'root';
$password = ''; 
$dbname = 'restaurant';

$mysqli = new mysqli($host, $user, $password, $dbname);

if ($mysqli->connect_errno) {
    die("Ошибка подключения к базе данных: " . $mysqli->connect_error);
} else {
    echo "✅ Подключение успешно!";
}
?>
