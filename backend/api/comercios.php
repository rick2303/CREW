<?php
    header("Content-type: application/json");
    include_once("../class/class-comercios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
        break;
        case 'GET':
           if(isset($_GET['id'])){
            Comercio::obtenerComercio($_GET['id']);
           }else{
            Comercio::obtenerComercios();
           }
               
         break;
        case 'PUT':
        break;
        case 'DELETE':
        
        break;
    }

?>