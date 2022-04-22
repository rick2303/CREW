<?php
 

    header("Content-Type: application/json");
    include_once("../class/class-pedidoDisponibles.php");

switch ($_SERVER['REQUEST_METHOD']) {

    case 'POST': //guardar
        
      
        break;

     case 'GET':
   if (isset($_GET['id'])) {
    
    }else {
        pedidosDisponibles::obtenerPedidos();
      
    }
   
    break;
    case 'PUT':

    break;

    case 'DELETE':
        pedidosDisponibles::eliminarPedido($_GET["id"]);
        $resultado["mensaje"]= "Eliminar un usuario con el id:". $_GET['id'];
        echo json_encode($resultado);
    break;
            
    
    default:
     
        break;
}






?>