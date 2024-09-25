<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/Address.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';
require_once __DIR__ . '/../utils/TokenHelper.php';
require_once __DIR__ . '/../../vendor/autoload.php';

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

     public function getAddress($token)
     {
          try {
               $userInfo = TokenHelper::decodeToken($token);
               $id_user = $userInfo['id'];
               $addressData = $this->address->getAllAddress($id_user);
               ResponseHelper::sendResponse(200, "Direcciones obtenidas correctamente", $addressData);
          } catch (Exception $e) {
               ResponseHelper::sendResponse(401, $e->getMessage());
          }
     }

     public function createAddress($data)
     {
          $name = $data['name'];
          $address = $data['address'];
          $comuna = $data['comuna'];
          $token = $data['token'];

          try {
               $userInfo = TokenHelper::decodeToken($token);
               $id_user = $userInfo['id'];
               $result = $this->address->saveAddress($id_user, $name, $address, $comuna);
               if ($result) {
                    ResponseHelper::sendResponse(200, "Dirección guardada correctamente", $result);
               }

          } catch (Exception $e) {
               ResponseHelper::sendResponse(401, $e->getMessage());
          }
     }

}