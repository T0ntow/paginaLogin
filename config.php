<?php
    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassowrd = '';
    $dbName = 'pagina-cadastro';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassowrd, $dbName);

    // if($conexao->connect_errno){
    //     echo "Erro";
    // } 
    // else{   
    //     echo "Conexão efetuada com sucesso";
    // }

    echo "Conta criada com sucesso, por fins de burrice volte a pagina inicial e conecte-se('-') ";
?>