<?php
require_once "User.php";
// traitement en get exemple traitement.php?paramEnGet if(isset($_GET['paramEnGet']))




$newUser = new User();


// traitement en post if(isset($_POST['monInput]))


if(isset($_POST['login']) && isset($_POST['password'])){
    $result = $newUser->register($_POST['login'],$_POST['password']);
    echo json_encode($result);
}
?>