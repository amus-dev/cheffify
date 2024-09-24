<?php
class Address
{
     private $conn;
     private $table_name = "wp_users_address";

     public function __construct($db)
     {
          $this->conn = $db;
     }

     public function saveAddress($id_user, $name, $address, $comuna)
     {
          $query = "INSERT INTO " . $this->table_name . " (id_user, name, address, comuna) VALUES (?, ?, ?, ?)";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("ssss", $id_user, $name, $address, $comuna);

          if ($stmt->execute()) {
               return $stmt->insert_id;
          } else {
               return false;
          }
     }
}
