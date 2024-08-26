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
          $this->host = getenv('DB_HOST') ?: 'localhost';
          $this->db_name = getenv('DB_NAME') ?: 'cheffify_administrator';
          $this->username = getenv('DB_USERNAME') ?: 'cheffify_user';
          $this->password = getenv('DB_PASSWORD') ?: 'cheffify2023';
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
