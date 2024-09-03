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

     public function create($email, $name, $lastName, $phone, $password)
     {
          $id_mail = uniqid('mail_', true);  // Genera un identificador único para id_mail

          $query = "INSERT INTO " . $this->table_name . " (email, nombre, apellido, celular, password, id_mail, active) VALUES (?, ?, ?, ?, ?, ?, 0)";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("ssssss", $email, $name, $lastName, $phone, $password, $id_mail);

          if ($stmt->execute()) {
               return $stmt->insert_id;
          } else {
               return false;
          }
     }

     public function updatePhone($userId, $newPhone)
     {
          $query = "UPDATE " . $this->table_name . " SET celular = ? WHERE id = ?";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("si", $newPhone, $userId);

          if ($stmt->execute()) {
               return true;
          } else {
               return false;
          }
     }

}
