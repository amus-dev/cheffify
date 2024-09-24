<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/Address.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';
require_once __DIR__ . '/../../vendor/autoload.php';
use \Firebase\JWT\JWT;
// Cargar las variables de entorno desde el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

class AddressController
{
     private $db;
     private $address;

     public function __construct()
     {
          $this->db = (new Database())->getConnection();
          $this->address = new Address($this->db);
     }

     public function createAddress($data)
     {
          $name = $data['name'];
          $address = $data['address'];
          $comuna = $data['comuna'];
          $token = $data['token'];

          try {
               $decoded = JWT::decode($token, new \Firebase\JWT\Key($_ENV['JWT_SECRET'], 'HS256'));
               $decoded_array = (array) $decoded;
               $userInfo = (array) $decoded_array['user'];
               $id_user = $userInfo['id'];
               $result = $address = $this->address->saveAddress($id_user, $name, $address, $comuna);
               if ($result) {
                    ResponseHelper::sendResponse(200, "Dirección guardada correctamente", $result);
               }

          } catch (Exception $e) {
               ResponseHelper::sendResponse(401, "Token inválido o expirado: " . $e->getMessage());
          }
     }

}