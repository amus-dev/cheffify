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

     public function createAccount($data)
     {
          $email = $data['email'];
          $name = $data['name'];
          $lastName = $data['lastName'];
          $phone = $data['phone'];
          $password = $data['password'];
          $confirmPassword = $data['confirmPassword'];

          // Verificar si las contraseñas coinciden
          if ($password !== $confirmPassword) {
               ResponseHelper::sendResponse(400, "Las contraseñas no coinciden");
               return;
          }

          // Verificar si el email ya está registrado
          $existingUser = $this->user->findByEmail($email);
          if ($existingUser) {
               ResponseHelper::sendResponse(400, "El correo ya está registrado");
               return;
          }

          // Hashear la contraseña
          $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

          // Crear el nuevo usuario
          $userId = $this->user->create($email, $name, $lastName, $phone, $hashedPassword);

          if ($userId) {
               ResponseHelper::sendResponse(200, "Cuenta creada exitosamente, revisa tu email para activar la cuenta.");
               // Aquí podrías enviar un email de activación
          } else {
               ResponseHelper::sendResponse(500, "Error al crear la cuenta");
          }
     }

     public function updatePhone($data)
     {
          $userId = $data['id'];
          $newPhone = $data['phone'];

          // Validar que el número de teléfono no esté vacío
          if (empty($newPhone)) {
               ResponseHelper::sendResponse(400, "El número de teléfono es requerido");
               return;
          }

          // Actualizar el número de teléfono
          $result = $this->user->updatePhone($userId, $newPhone);

          if ($result) {
               ResponseHelper::sendResponse(200, "Número de teléfono actualizado correctamente");
          } else {
               ResponseHelper::sendResponse(500, "Error al actualizar el número de teléfono");
          }
     }
}