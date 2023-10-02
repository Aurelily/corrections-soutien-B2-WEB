<?php
require_once 'Database.php';
class User extends Database {

    public function getAllUser()
    {
        $sql = 'SELECT * FROM user';
        $query = $this->pdo->prepare($sql);
        $query->execute();

        $result = $query->fetchAll();https://github.com/Aurelily/toto.git
        return $result;
    }
    public function register($login, $password)
    {
        $sql = "INSERT INTO user (login, password) VALUES (:login, :password)";
        $query = $this->pdo->prepare($sql);
        $query->bindValue(':login',$login,PDO::PARAM_STR);
        $query->bindValue(':password',$password,PDO::PARAM_STR);
        $query->execute();

        return 'Inscription réussite';
    }
    public function connexion($id)
    {
        $sql = "SELECT * FROM user WHERE id = :id";
        $query = $this->pdo->prepare($sql);
        $query->bindValue(':login',$id,PDO::PARAM_INT);
        $query->execute();
    }
}
?>