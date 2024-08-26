<?php

class Database
{
     private $host;
     private $db_name;
     private $username;
     private $password;
     public $conn;

     public function __construct()
     {
          // Cargar las variables de entorno desde el archivo .env
          $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
          $dotenv->load();

          $this->host = $_ENV['DB_HOST'];
          $this->db_name = $_ENV['DB_NAME'];
          $this->username = $_ENV['DB_USERNAME'];
          $this->password = $_ENV['DB_PASSWORD'];
     }

     public function getConnection()
     {
          $this->conn = null;
          try {
               $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
               if ($this->conn->connect_error) {
                    die("Connection failed: " . $this->conn->connect_error);
               }
          } catch (Exception $e) {
               echo "Connection error: " . $e->getMessage();
          }
          return $this->conn;
     }
}
