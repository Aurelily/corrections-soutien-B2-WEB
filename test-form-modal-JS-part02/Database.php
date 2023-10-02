<?php

class Database
{
    //à revoir les attributs
    protected $pdo = 'NULL';

    public function __construct()
    {
        $pdo = new \PDO('mysql:host=localhost;dbname=test-modal;charset=utf8', 'hardjojo', 'hardjojo');

        $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
        $this->pdo = $pdo;

        return $pdo;
    }
}
?>