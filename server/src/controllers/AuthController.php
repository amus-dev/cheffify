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

          if ($user) {
               // Verificar si la contraseña en la base de datos está en texto plano
               if (password_verify($password, $user['password'])) {
                    // La contraseña ya estaba hasheada y es correcta
                    $this->loginSuccessful($user);
               } elseif ($user['password'] === $password) {
                    // La contraseña está en texto plano y coincide, la hasheamos y la actualizamos
                    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
                    $this->user->updatePassword($user['id'], $hashedPassword);

                    // Procedemos con el login
                    $this->loginSuccessful($user);
               } else {
                    ResponseHelper::sendResponse(401, "Credenciales incorrectas");
               }
          } else {
               ResponseHelper::sendResponse(401, "Credenciales incorrectas");
          }
     }

     private function loginSuccessful($user)
     {
          // Aquí generarías tu JWT y cualquier otro proceso post-login
          ResponseHelper::sendResponse(200, "Sesión iniciada!, serás redirigido en unos segundos...", $user);
     }
}