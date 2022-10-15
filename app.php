<?php
    if(isset($_POST['submit'])) 
    {
        include_once('config.php');

        $nome = $_POST['nome'];
        $user = $_POST['user'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        $result = mysqli_query($conexao, "INSERT INTO usuarios_cadastrados(nome, user, email, senha) VALUE ('$nome', '$user', '$email', '$senha')");
    }
    
?>
