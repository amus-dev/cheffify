<?php
require_once '../controllers/AuthController.php';

$authController = new AuthController();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'login') {
     $data = json_decode(file_get_contents("php://input"), true);
     $authController->login($data);
} else {
     ResponseHelper::sendResponse(404, "Route not found");
}
