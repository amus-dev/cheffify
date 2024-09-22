<?php
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../models/Transaction.php';
require_once __DIR__ . '/../utils/ResponseHelper.php';
require_once __DIR__ . '/../../vendor/autoload.php';
use \Firebase\JWT\JWT;
// Cargar las variables de entorno desde el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

class TransactionController
{
     private $db;
     private $transaction;

     public function __construct()
     {
          $this->db = (new Database())->getConnection();
          $this->transaction = new Transaction($this->db);
     }

     public function createTransaction($data)
     {
          // Parámetros del usuario
          $name = $data['name'];
          $address = $data['address'];
          $email = $data['email'];
          $comuna = $data['comuna'];
          $phone = $data['phone'];
          $products = $data['products'];
          $idUser = $data['idUser'];

          // Parámetros de la transacción
          $amount = $data['amount']; // Monto total de la transacción
          $buyOrder = rand(); // Número único de orden (puedes generarlo dinámicamente)
          $sessionId = uniqid(); // ID de sesión única
          $returnUrl = 'http://localhost:5173/response'; // URL a la que se redirige después del pago

          $transaction = new \Transbank\Webpay\WebpayPlus\Transaction();
          $response = $transaction->create($buyOrder, $sessionId, $amount, $returnUrl);

          // Obtener el token y la URL de Webpay
          $token = $response->getToken();
          $url = $response->getUrl();

          // Enviar la respuesta al front para redirigir al usuario a Webpay
          $responseWebpay = array(
               'token' => $token,
               'url' => $url . '?token_ws=' . $token,
               'sessionId' => $sessionId,
               'buyOrder' => $buyOrder,
               'amount' => $amount,
               'name' => $name,
               'address' => $address,
               'email' => $email,
               'comuna' => $comuna,
               'phone' => $phone,
               'products' => $products,
               'idUser' => $idUser
          );
          ResponseHelper::sendResponse(200, "Seras redirigido a Webpay", data: $responseWebpay);
          return;
     }

     public function webpayOperation($data)
     {
          $token_ws = $data['token_ws'] ?? null;
          $data_webpay = $data['data_webpay'] ?? null;
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
               $transaction = new \Transbank\Webpay\WebpayPlus\Transaction();
               $response = $transaction->commit($token_ws);
               $this->isANormalPaymentFlow($data_webpay, $response);
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
          return;
     }

     private function theUserWasRedirectedBecauseWasIdleFor10MinutesOnWebapayForm()
     {
          // Si viene solo TBK_ORDEN_COMPRA y TBK_ID_SESION es porque el usuario estuvo 10 minutos sin hacer nada en el
          // formulario de pago y se canceló la transacción automáticamente (por timeout)
          ResponseHelper::sendResponse(408, "No hiciste nada en 10 minutos, se canceló la transacción");
          return;
     }

     // Si viene solo token_ws es porque es un flujo de pago normal
     private function isANormalPaymentFlow($data_webpay, $response)
     {

          $address = $data_webpay['address'];
          $comuna = $data_webpay['comuna'];
          $email = $data_webpay['email'];
          $name = $data_webpay['name'];
          $phone = $data_webpay['phone'];
          $products = json_encode($data_webpay['products'], JSON_PRETTY_PRINT);
          $idUser = $data_webpay['idUser'];

          $date = new DateTime($response->transactionDate);
          $transactionDateFormatted = $date->format('Y-m-d H:i:s');

          $this->transaction->registerTransaction($name, $address, $email, $comuna, $phone, $response->status, $response->amount, $response->sessionId, $response->buyOrder, $response->cardNumber, $transactionDateFormatted, $products, $idUser);

          ResponseHelper::sendResponse(200, "Se ha realizado el pago con éxito");
          return;
     }

}