<?php
class Transaction
{
     private $conn;
     private $table_name = "wp_transactions";

     public function __construct($db)
     {
          $this->conn = $db;
     }

     public function registerTransaction($name, $address, $email, $comuna, $phone, $status, $amount, $sessionId, $buyOrder, $cardNumber, $transactionDate, $products, $idUser)
     {
          $query = "INSERT INTO " . $this->table_name . " (name, address, email, comuna, telefono, status, monto, sessionId, buyOrder, cardNumber, transactionDate, products, id_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
          $stmt = $this->conn->prepare($query);
          $stmt->bind_param("sssssssssssss", $name, $address, $email, $comuna, $phone, $status, $amount, $sessionId, $buyOrder, $cardNumber, $transactionDate, $products, $idUser);

          if ($stmt->execute()) {
               return $stmt->insert_id;
          } else {
               return false;
          }
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

}
