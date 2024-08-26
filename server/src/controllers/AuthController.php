<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';

class AuthController
{
     private $db;
     private $user;

     public function __construct()
     {
          $this->db = (new Database())->getConnection();
          $this->user = new User($this->db);
     }

     public function login($data)
     {
          $email = $data['email'];
          $password = $data['password'];
          $user = $this->user->findByEmail($email);

          if ($user && password_verify($password, $user['password'])) {
               // Aquí puedes generar un token de sesión o JWT si es necesario
               ResponseHelper::sendResponse(200, "Login successful", $user);
          } else {
               ResponseHelper::sendResponse(401, "Credenciales incorrectas");
          }
     }
}
