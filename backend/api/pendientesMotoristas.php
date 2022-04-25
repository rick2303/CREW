<?php
//echo "Metodo HTTP:".$_SERVER['REQUEST_METHOD'];
//Recibir peticiones del usuario
//echo 'informacion' . file_get_contents('php://input');

    header("Content-Type: application/json");
    include_once("../class/class-pendientesMotoristas.php");

switch ($_SERVER['REQUEST_METHOD']) {

    case 'POST': //guardar
        
        $_POST=json_decode(file_get_contents('php://input'),true);
        $motorista =new MotoristaPendiente($_POST["nombre"],$_POST["apellido"],$_POST["correoElectronico"],$_POST["numeroDeTelefono"],$_POST["historalPedidos"],$_POST["pedidosActivos"],$_POST["contrasena"]);
        $motorista->guardarMotoristaPendiente();
        //echo"guardar el usuario ".$_POST['nombre'];
        $resultado["mensaje"]= "GUARDAR USUARIO,INFORMACION". json_encode($_POST);
        echo json_encode($resultado);
        break;

     case 'GET':
   if (isset($_GET['id'])) {
    MotoristaPendiente::obtenerMotoristaPendiente($_GET['id']);
    }else {
        MotoristaPendiente::obtenerMotoristasPendiente();
        //$resultado["mensaje"]=  "retornar todos os usuarios";
       // echo json_encode($resultado);
    }
   
    break;
    case 'PUT':
     


    break;

    case 'DELETE':
        MotoristaPendiente::eliminarMotoristaPendiente($_GET["id"]);
        $resultado["mensaje"]= "Eliminar un usuario con el id:". $_GET['id'];
        echo json_encode($resultado);
    break;
            
    
    default:
     
        break;
}






?>