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
          $userController = new UserController();
          $data = json_decode(file_get_contents("php://input"), true);
          $userController->login($data);
          break;

     case 'create':
          require_once '../src/controllers/UserController.php';
          $userController = new UserController();
          $data = json_decode(file_get_contents("php://input"), true);
          $userController->createAccount($data);
          break;

     case 'updatePhone':
          require_once '../src/controllers/UserController.php';
          $userController = new UserController();
          $data = json_decode(file_get_contents("php://input"), true);
          $userController->updatePhone($data);
          break;

     case 'getTokenData':
          require_once '../src/controllers/UserController.php';
          $userController = new UserController();
          $data = json_decode(file_get_contents("php://input"), true);
          $userController->getTokenData($data);
          break;
     case 'activate':
          require_once '../src/controllers/UserController.php';
          $userController = new UserController();
          $token = $_GET['token'] ?? '';
          $userController->activateAccount($token);
          break;
     case 'transaction':
          require_once '../src/controllers/TransactionController.php';
          $transactionController = new TransactionController();
          $data = json_decode(file_get_contents("php://input"), true);
          $transactionController->createTransaction($data);
          break;
     case 'responseWebpay':
          require_once '../src/controllers/TransactionController.php';
          $transactionController = new TransactionController();
          $data = json_decode(file_get_contents("php://input"), true);
          $transactionController->webpayOperation($data);
          break;
     case 'getAddress':
          require_once '../src/controllers/AddressController.php';
          $addressController = new AddressController();
          $data = json_decode(file_get_contents("php://input"), true);
          $addressController->getAddress($data);
          break;
     case 'saveAddress':
          require_once '../src/controllers/AddressController.php';
          $addressController = new AddressController();
          $data = json_decode(file_get_contents("php://input"), true);
          $addressController->createAddress($data);
          break;


     // Otros casos según las acciones que desees manejar
     default:
          http_response_code(404);
          echo json_encode(["message" => "Action not found"]);
          break;
}

