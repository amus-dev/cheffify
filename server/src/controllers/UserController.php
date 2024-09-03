<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';
require_once __DIR__ . '/../../vendor/autoload.php';
use \Firebase\JWT\JWT;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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
               'user' => [
                    'id' => $user['id'],
                    'email' => $user['email'],
                    'nombre' => $user['nombre'],
                    'apellido' => $user['apellido'],
                    'celular' => $user['celular']
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
               // Generar un token de activación
               $activationToken = bin2hex(random_bytes(16));
               // Guardar el token en la base de datos (esto requiere que agregues una columna para el token)
               $this->user->saveActivationToken($userId, $activationToken);
               // Enviar email de confirmación
               $this->sendConfirmationEmail($email, $activationToken);
               ResponseHelper::sendResponse(200, "Cuenta creada exitosamente. Revisa tu email para activar la cuenta.");
          } else {
               ResponseHelper::sendResponse(500, "Error al crear la cuenta");
          }
     }

     private function sendConfirmationEmail($email, $token)
     {
          $mail = new PHPMailer(true);

          try {
               // Configuración del servidor de correo
               $mail->isSMTP();
               $mail->Host = 'mail.cheffify.cl';
               $mail->SMTPAuth = true;
               $mail->Username = 'contacto@cheffify.cl';
               $mail->Password = '(*?OO!8zdb91';
               $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
               $mail->Port = 465;
               $mail->Timeout = 10; // 10 segundos
               $mail->SMTPOptions = [
                    'ssl' => [
                         'verify_peer' => false,
                         'verify_peer_name' => false,
                         'allow_self_signed' => true
                    ]
               ];


               // Configuración del email
               $mail->setFrom('contacto@cheffify.cl', 'Contacto Cheffify');
               $mail->addAddress($email);

               $mail->isHTML(true);
               $mail->Subject = 'Confirma tu cuenta';
               $mail->Body = "Gracias por registrarte. Haz clic en el siguiente enlace para activar tu cuenta: <a href='{$_ENV['JWT_DOMAIN']}?token=$token'>Activar Cuenta</a>";

               // Habilitar salida de depuración
               $mail->SMTPDebug = 2;
               $mail->Debugoutput = 'error_log';

               $mail->send();
               error_log("Correo enviado correctamente");
          } catch (Exception $e) {
               error_log("Error al enviar email de confirmación: {$mail->ErrorInfo}");
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

     public function getTokenData($data)
     {
          $token = $data['token'] ?? '';
          if (empty($token)) {
               ResponseHelper::sendResponse(400, "El token es requerido");
               return;
          }
          try {
               // Primero asignamos el resultado a una variable
               $decoded = JWT::decode($token, new \Firebase\JWT\Key($_ENV['JWT_SECRET'], 'HS256'));
               // Convertimos el objeto decodificado en un array
               $decoded_array = (array) $decoded;
               ResponseHelper::sendResponse(200, "Token decodificado correctamente", $decoded_array);
          } catch (Exception $e) {
               ResponseHelper::sendResponse(401, "Token inválido o expirado: " . $e->getMessage());
          }
     }

     public function activateAccount($token)
     {
          if (empty($token)) {
               ResponseHelper::sendResponse(400, "Token de activación inválido");
               return;
          }

          $user = $this->user->findByActivationToken($token);
          if ($user) {
               $this->user->activateUser($user['id']);
               ResponseHelper::sendResponse(200, "Cuenta activada correctamente. Ahora puedes iniciar sesión.");
          } else {
               ResponseHelper::sendResponse(400, "Token de activación inválido o expirado");
          }
     }

}