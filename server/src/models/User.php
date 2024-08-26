<?php
class User
{
     private $conn;
     private $table_name = "wp_users_login";

     public function __construct($db)
     {
          $this->conn = $db;
     }

     public function findByEmail($email)
     {
          $query = "SELECT * FROM " . $this->table_name . " WHERE email = ?";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("s", $email);
          $stmt->execute();
          $result = $stmt->get_result();
          return $result->fetch_assoc();
     }

     public function updatePassword($userId, $newPasswordHash)
     {
          $query = "UPDATE " . $this->table_name . " SET password = ? WHERE id = ?";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("si", $newPasswordHash, $userId);
          $stmt->execute();
     }

}
