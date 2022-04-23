<?php
//echo "Metodo HTTP:".$_SERVER['REQUEST_METHOD'];
//Recibir peticiones del usuario
//echo 'informacion' . file_get_contents('php://input');

    header("Content-Type: application/json");
    include_once("../class/class-motorista.php");

switch ($_SERVER['REQUEST_METHOD']) {

    case 'POST': //guardar
        
        $_POST=json_decode(file_get_contents('php://input'),true);
        $motorista =new Motorista($_POST["nombre"],$_POST["apellido"],$_POST["correoElectronico"],$_POST["numeroDeTelefono"],$_POST["historalPedidos"],$_POST["pedidosActivos"],$_POST["contrasena"]);
        $motorista->guardarMotorista();
        //echo"guardar el usuario ".$_POST['nombre'];
        $resultado["mensaje"]= "GUARDAR USUARIO,INFORMACION". json_encode($_POST);
        echo json_encode($resultado);
        break;

     case 'GET':
   if (isset($_GET['id'])) {
    Motorista::obtenerMotorista($_GET['id']);
    }else {
        Motorista::obtenerMotoristas();
        //$resultado["mensaje"]=  "retornar todos os usuarios";
       // echo json_encode($resultado);
    }
   
    break;
    case 'PUT':
     


        $_PUT=json_decode(file_get_contents('php://input'),true);
        $motorista= new Motorista($_PUT["nombre"],$_PUT["apellido"],$_PUT["correoElectronico"],$_PUT["numeroDeTelefono"],$_PUT["historalPedidos"],$_PUT["pedidosActivos"],$_PUT["contrasena"]);
        $motorista->actualizarMotorista($_GET['id']);
        $resultado["mensaje"]= "ACTUALIZAR UN USUARIO con el id:". $_GET['id'].
     "Informacion actualizar" . json_encode($_PUT);
     echo json_encode($resultado);
    break;

    case 'DELETE':
     
    break;
            
    
    default:
     
        break;
}






?>