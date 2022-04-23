<?php
    header("Content-type: application/json");
    include_once("../class/class-comercios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $comercio = new Comercio($_POST['nombre'], $_POST['apellido'], $_POST['fechaNacimiento'], $_POST['pais']);
            $comercio->guardarComercio();
            $resultado["Mensaje"] = "Guardar el comercio, informacion: ". json_encode($_POST);
            echo json_encode($resultado);
        break;
        case 'GET':
           if(isset($_GET['id'])){
            Comercio::obtenerComercio($_GET['id']);
           }else{
            Comercio::obtenerComercios();
           }
               
         break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'), true);
            $comercio = new Comercio($_PUT['nombre'], $_PUT['apellido'], $_PUT['fechaNacimiento'], $_PUT['pais']);
            $comercio->actualizarComercio($_GET['id']);
            $resultado["mensaje"] = "Actualizar comercio con id: ". $_GET['id'].
                                    ", Informacion a actualizar ". json_encode($_PUT);
             echo json_encode($resultado);
        break;
        case 'DELETE':
            Comercio::eliminarComercio($_GET['id']);
            $resultado["mensaje"] = "Eliminar un comercio con id: ". $_GET['id'];
            echo json_encode($resultado);
        break;
    }

?>