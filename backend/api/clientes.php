<?php
    header("Content-type: application/json");
    include_once("../class/class-clientes.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $Cliente = new Cliente($_POST['nombre'], $_POST['correoElectronico'], $_POST['verOrden'], $_POST['contrasena']);
            $Cliente->guardarCliente();
            $resultado["Mensaje"] = "Guardar el cliente, informacion: ". json_encode($_POST);
            echo json_encode($resultado);
        break;
        case 'GET':
           if(isset($_GET['id'])){
            Cliente::obtenerCliente($_GET['id']);
           }else{
            Cliente::obtenerClientes();
           }
               
         break;
        case 'PUT':
            // $_PUT = json_decode(file_get_contents('php://input'), true);
            // $cliente = new Cliente($_PUT['nombre'], $_PUT['correoElectronico'], $_PUT['verOrden'], $_PUT['contrasena']);
            // $cliente->actualizarCliente($_GET['id']);
            // $resultado["mensaje"] = "Actualizar cliente con id: ". $_GET['id'].
            //                         ", Informacion a actualizar ". json_encode($_PUT);
            //  echo json_encode($resultado);
        break;
        case 'DELETE':
        break;
    }

?>