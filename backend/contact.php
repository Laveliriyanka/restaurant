<?php
include 'cors.php';
require 'db.php';
$data = json_decode(file_get_contents('php://input'), true);
$name = $mysqli->real_escape_string($data['name'] ?? '');
$email = $mysqli->real_escape_string($data['email'] ?? '');
$message = $mysqli->real_escape_string($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error'=>'Missing required fields']);
    exit;
}

$stmt = $mysqli->prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
$stmt->bind_param('sss', $name, $email, $message);
if ($stmt->execute()) {
    echo json_encode(['success'=>true, 'id'=>$stmt->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(['error'=>'Insert failed']);
}
