<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';
require_once __DIR__ . '/../../vendor/autoload.php';

// Cargar las variables de entorno desde el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

class TransactionController
{
     private $db;
     private $user;

     public function __construct()
     {
          $this->db = (new Database())->getConnection();
          $this->user = new User($this->db);
     }

     public function createTransaction($data)
     {
          $transaction = new \Transbank\Webpay\WebpayPlus\Transaction();

          // Parámetros de la transacción
          $amount = $data['amount']; // Monto total de la transacción
          $buyOrder = rand(); // Número único de orden (puedes generarlo dinámicamente)
          $sessionId = uniqid(); // ID de sesión única
          $returnUrl = 'http://localhost:5173/response'; // URL a la que se redirige después del pago

          $response = $transaction->create($buyOrder, $sessionId, $amount, $returnUrl);

          // Obtener el token y la URL de Webpay
          $token = $response->getToken();
          $url = $response->getUrl();

          // Enviar la respuesta al front para redirigir al usuario a Webpay
          $responseWebpay = $url . '?token_ws=' . $token;
          ResponseHelper::sendResponse(200, "Seras redirigido a Webpay", data: $responseWebpay);
          return;
     }

     public function webpayOperation($data)
     {
          $token_ws = $data['token_ws'] ?? null;
          $TBK_TOKEN = $data['TBK_TOKEN'] ?? null;
          $TBK_ORDEN_COMPRA = $data['TBK_ORDEN_COMPRA'] ?? null;
          $TBK_ID_SESION = $data['TBK_ID_SESION'] ?? null;

          if (!empty($TBK_TOKEN) && !empty($TBK_ORDEN_COMPRA) && !empty($TBK_ID_SESION)) {
               // Si se cumple la condición, se considera un timeout
               $this->userAbortedOnWebpayForm();
          } elseif (!empty($TBK_ORDEN_COMPRA) && !empty($TBK_ID_SESION)) {
               // Si se cumple la condición, se considera un timeout
               $this->theUserWasRedirectedBecauseWasIdleFor10MinutesOnWebapayForm();
          }

          // Si solo `token_ws` viene con información
          if ($token_ws) {
               try {
                    // Crear una instancia de la transacción para confirmar con Transbank
                    $transaction = new \Transbank\Webpay\WebpayPlus\Transaction();
                    $response = $transaction->commit($token_ws);

                    // Verificar si la transacción fue aprobada
                    if ($response->isApproved()) {
                         // El token_ws es válido y la transacción fue aprobada
                         $this->isANormalPaymentFlow();
                    } else {
                         // La transacción no fue aprobada
                         $this->cancelOrder();
                    }
               } catch (\Transbank\Webpay\WebpayPlus\Exceptions\TransactionCommitException $e) {
                    // Verificar si el estado de la transacción es abortado
                    if (strpos($e->getMessage(), 'aborted') !== false) {
                         // La transacción fue abortada, ya sea por el usuario o por timeout
                         $this->theUserWasRedirectedBecauseWasIdleFor10MinutesOnWebapayForm();
                    } else {
                         // Manejo de otros errores durante la confirmación de la transacción
                         $this->anErrorOcurredOnWebpayForm();
                    }
               } catch (Exception $e) {
                    // Manejo de errores generales
                    $this->anErrorOcurredOnWebpayForm();
               }
          }
     }

     private function cancelOrder()
     {
          // Acá has lo que tangas que hacer para marcar la orden como fallida o cancelada
          ResponseHelper::sendResponse(200, "Se ha cancelado la orden");
          return;
     }
     private function userAbortedOnWebpayForm()
     {
          // Si viene TBK_TOKEN, TBK_ORDEN_COMPRA y TBK_ID_SESION es porque el usuario abortó el pago
          ResponseHelper::sendResponse(402, "Haz abortado el pago en Webpay");
          return;
     }

     private function anErrorOcurredOnWebpayForm()
     {
          // Si viene token_ws, TBK_TOKEN, TBK_ORDEN_COMPRA y TBK_ID_SESION es porque ocurrió un error en el formulario de pago
          ResponseHelper::sendResponse(500, "Ocurrió un error en el formulario de pago");
     }

     private function theUserWasRedirectedBecauseWasIdleFor10MinutesOnWebapayForm()
     {
          // Si viene solo TBK_ORDEN_COMPRA y TBK_ID_SESION es porque el usuario estuvo 10 minutos sin hacer nada en el
          // formulario de pago y se canceló la transacción automáticamente (por timeout)
          ResponseHelper::sendResponse(408, "No hiciste nada en 10 minutos, se canceló la transacción");
          return;
     }

     private function isANormalPaymentFlow()
     {
          // Si viene solo token_ws es porque es un flujo de pago normal
          ResponseHelper::sendResponse(200, "Se ha realizado el pago con éxito");
          return;
     }

}