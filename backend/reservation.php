<?php
include 'cors.php';
require 'db.php';
$data = json_decode(file_get_contents('php://input'), true);
$name = $mysqli->real_escape_string($data['name'] ?? '');
$phone = $mysqli->real_escape_string($data['phone'] ?? '');
$date = $mysqli->real_escape_string($data['date'] ?? '');
$time = $mysqli->real_escape_string($data['time'] ?? '');
$guests = (int)($data['guests'] ?? 1);

if (!$name || !$phone || !$date || !$time) {
    http_response_code(400);
    echo json_encode(['error'=>'Missing required fields']);
    exit;
}

$stmt = $mysqli->prepare('INSERT INTO reservations (name, phone, date, time, guests) VALUES (?, ?, ?, ?, ?)');
$stmt->bind_param('ssssi', $name, $phone, $date, $time, $guests);
if ($stmt->execute()) {
    echo json_encode(['success'=>true, 'id'=>$stmt->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(['error'=>'Insert failed']);
}
