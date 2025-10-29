<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    http_response_code(200);
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["message" => "Only POST allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["email"]) || !filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid email"]);
    exit;
}

require_once __DIR__ . "/vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "restaurant.123445678@gmail.com";
    $mail->Password = "ikcpdxtekqdiogfw";
    $mail->SMTPSecure = "tls";
    $mail->Port = 587;
    $mail->isHTML(true);

    $mail->setFrom("restaurant.123445678@gmail.com", "Restaurant");
    $mail->addAddress($data["email"]);
    $mail->Subject = "Thanks for subscribing";
    $mail->Body = file_get_contents("email_to_user.html");
    $mail->send();

    $mail->clearAddresses();
    $mail->addAddress("restaurant.123445678@gmail.com");
    $mail->Subject = "New subscription";

    $template = file_get_contents("email_to_owner.html");
    $template = str_replace("{{email}}", $data["email"], $template);
    $template = str_replace("{{name}}", "Anonymous", $template);
    $template = str_replace("{{time}}", date("Y-m-d H:i:s"), $template);
    $mail->Body = $template;

    $mail->send();

    echo json_encode(["status" => "success", "message" => "Emails sent"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
