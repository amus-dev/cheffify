<?php
require_once '../controllers/AuthController.php';

$authController = new AuthController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

     switch ($_GET['action']) {
          case 'login':
               $data = json_decode(file_get_contents("php://input"), true);
               $authController->login($data);
               break;
          default:
               ResponseHelper::sendResponse(404, "Route not found");
               break;
     }
} else {
     ResponseHelper::sendResponse(404, "Route not found");
}


