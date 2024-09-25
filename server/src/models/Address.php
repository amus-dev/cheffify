<?php
class Address
{
     private $conn;
     private $table_name = "wp_users_address";

     public function __construct($db)
     {
          $this->conn = $db;
     }

     public function getAllAddress($id_user)
     {
          $query = "SELECT * FROM " . $this->table_name . " WHERE id_user = ?";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("s", $id_user);
          $stmt->execute();
          $result = $stmt->get_result();
          return $result->fetch_all(MYSQLI_ASSOC);
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

     public function deleteAddress($id_user, $id_address)
     {
          $query = "DELETE FROM " . $this->table_name . " WHERE id = ? AND id_user = ?";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("ii", $id_address, $id_user); // Los parámetros son enteros

          if ($stmt->execute()) {
               return true; // Si la eliminación fue exitosa
          } else {
               return false; // Si hubo algún problema
          }
     }

}
