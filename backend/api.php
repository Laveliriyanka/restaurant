<?php 
include 'cors.php';
header("Content-Type: application/json");
require_once "db.php";

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $input = json_decode(file_get_contents("php://input"), true);
        if (isset($input['name'], $input['phone'], $input['date'], $input['guests'])) {
            $stmt = $mysqli->prepare("INSERT INTO reservations (name, phone, date, time, guests) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssi", $input['name'], $input['phone'], $input['date'], $input['time'], $input['guests']);
            $stmt->execute();
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Недостаточно данных"]);
        }
        break;

    case 'GET':
        $result = $mysqli->query("SELECT * FROM reservations ORDER BY created_at DESC");
        echo json_encode($result->fetch_all(MYSQLI_ASSOC));
        break;

    default:
        echo json_encode(["status" => "error", "message" => "Неподдерживаемый метод"]);
}
?>
