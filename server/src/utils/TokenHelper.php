<?php
require_once __DIR__ . '/../../vendor/autoload.php';
use \Firebase\JWT\JWT;

class TokenHelper
{
     public static function decodeToken($token)
     {
          try {
               $decoded = JWT::decode($token, new \Firebase\JWT\Key($_ENV['JWT_SECRET'], 'HS256'));
               return (array) $decoded->user;  // Retorna la información del usuario.
          } catch (Exception $e) {
               throw new Exception("Token inválido o expirado: " . $e->getMessage());
          }
     }
}
