<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';
require_once __DIR__ . '/../../vendor/autoload.php';
use \Firebase\JWT\JWT;

// Cargar las variables de entorno desde el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

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
          $payload = [
               'iss' => $_ENV['JWT_DOMAIN'], // Issuer
               'aud' => $_ENV['JWT_DOMAIN'], // Audience
               'iat' => time(), // Tiempo en que fue emitido
               'exp' => time() + 3600, // Tiempo en que expira (1 hora)
               'data' => [
                    'id' => $user['id'],
                    'email' => $user['email']
               ]
          ];

          $jwt = JWT::encode($payload, $_ENV['JWT_SECRET'], 'HS256');
          ResponseHelper::sendResponse(200, "Sesión iniciada!, serás redirigido en unos segundos...", ['token' => $jwt]);
     }
}