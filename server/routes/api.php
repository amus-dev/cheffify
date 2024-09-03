<?php
// Configuración de CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Manejo de solicitudes preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     http_response_code(200);
     exit();
}

// Enrutamiento básico basado en parámetros de consulta
$action = $_GET['action'] ?? '';

switch ($action) {
     case 'login':
          require_once '../src/controllers/UserController.php';
          $authController = new AuthController();
          $data = json_decode(file_get_contents("php://input"), true);
          $authController->login($data);
          break;

     case 'create':
          require_once '../src/controllers/UserController.php';
          $authController = new AuthController();
          $data = json_decode(file_get_contents("php://input"), true);
          $authController->createAccount($data);
          break;

     case 'updatePhone':
          require_once '../src/controllers/UserController.php';
          $authController = new AuthController();
          $data = json_decode(file_get_contents("php://input"), true);
          $authController->updatePhone($data);
          break;

     case 'getTokenData':
          require_once '../src/controllers/UserController.php';
          $authController = new AuthController();
          $data = json_decode(file_get_contents("php://input"), true);
          $authController->getTokenData($data);
          break;
     case 'activate':
          require_once '../src/controllers/AuthController.php';
          $authController = new AuthController();
          $token = $_GET['token'] ?? '';
          $authController->activateAccount($token);
          break;


     // Otros casos según las acciones que desees manejar
     default:
          http_response_code(404);
          echo json_encode(["message" => "Action not found"]);
          break;
}

