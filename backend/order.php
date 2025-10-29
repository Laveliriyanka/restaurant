<?php
include 'cors.php';
require 'db.php';
$data = json_decode(file_get_contents('php://input'), true);
$items = $mysqli->real_escape_string(json_encode($data['items'] ?? []));
$total = (float)($data['total'] ?? 0);

if (!$items || !$total) {
    http_response_code(400);
    echo json_encode(['error'=>'Missing required fields']);
    exit;
}

$status = 'pending';
$stmt = $mysqli->prepare('INSERT INTO orders (items, total_price, status) VALUES (?, ?, ?)');
$stmt->bind_param('sds', $items, $total, $status);
if ($stmt->execute()) {
    echo json_encode(['success'=>true, 'id'=>$stmt->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(['error'=>'Insert failed']);
}
