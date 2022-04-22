<?php
class Motorista{

    private $nombre;

    private $apellido;

    private $correoElectronico;

    private $numeroDeTelefono;

    private $historalPedidos;

    private $pedidosActivos;

    private $contrasena;

    

    public function __construct($nombre, $apellido, $correoElectronico, $numeroDeTelefono, $historalPedidos, $pedidosActivos, $contrasena, )
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->correoElectronico = $correoElectronico;
        $this->numeroDeTelefono = $numeroDeTelefono;
        $this->historalPedidos = $historalPedidos;
        $this->pedidosActivos = $pedidosActivos;
        $this->contrasena = $contrasena;
     
    }


   
    





/**
 * Get the value of nombre
 */ 
public function getNombre()
{
return $this->nombre;
}

/**
 * Set the value of nombre
 *
 * @return  self
 */ 
public function setNombre($nombre)
{
$this->nombre = $nombre;

return $this;
}

/**
 * Get the value of Apellido
 */ 
public function getApellido()
{
return $this->Apellido;
}

/**
 * Set the value of Apellido
 *
 * @return  self
 */ 
public function setApellido($Apellido)
{
$this->Apellido = $Apellido;

return $this;
}

/**
 * Get the value of correoElectronico
 */ 
public function getCorreoElectronico()
{
return $this->correoElectronico;
}

/**
 * Set the value of correoElectronico
 *
 * @return  self
 */ 
public function setCorreoElectronico($correoElectronico)
{
$this->correoElectronico = $correoElectronico;

return $this;
}

/**
 * Get the value of numeroDeTelefono
 */ 
public function getNumeroDeTelefono()
{
return $this->numeroDeTelefono;
}

/**
 * Set the value of numeroDeTelefono
 *
 * @return  self
 */ 
public function setNumeroDeTelefono($numeroDeTelefono)
{
$this->numeroDeTelefono = $numeroDeTelefono;

return $this;
}

/**
 * Get the value of historialPedidos
 */ 
public function getHistorialPedidos()
{
return $this->historialPedidos;
}

/**
 * Set the value of historialPedidos
 *
 * @return  self
 */ 
public function setHistorialPedidos($historialPedidos)
{
$this->historialPedidos = $historialPedidos;

return $this;
}

/**
 * Get the value of pedidosActivos
 */ 
public function getPedidosActivos()
{
return $this->pedidosActivos;
}

/**
 * Set the value of pedidosActivos
 *
 * @return  self
 */ 
public function setPedidosActivos($pedidosActivos)
{
$this->pedidosActivos = $pedidosActivos;

return $this;
}


  /**
     * Get the value of contrasena
     */ 
    public function getContrasena()
    {
        return $this->contrasena;
    }

    /**
     * Set the value of contrasena
     *
     * @return  self
     */ 
    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;

        return $this;
    }
public function guardarMotorista(){
    $contenidoArhivo=file_get_contents('../data/motoristas.json');
    $motorista=json_decode($contenidoArhivo,true);
    $motorista[]=array( // agregando motorista
        "nombre"=>$this->nombre,
        "apellido"=>$this->apellido, 
        "correoElectronico"=>$this->correoElectronico,
        "numeroDeTelefono"=>$this->numeroDeTelefono,
        "historalPedidos"=>$this->historalPedidos,
        "pedidosActivos"=>$this->pedidosActivos,
        "contrasena"=>$this->contrasena


    );
    $archivo= fopen("../data/motoristas.json","w");
    fwrite($archivo,json_encode($motorista));
    fclose($archivo); 
}
public static function obtenerMotoristas(){//nos ayuda a usarlo sin instanciarlo 
    $contenidoArhivo=file_get_contents('../data/motoristas.json');
    echo $contenidoArhivo;

}



  
}



?>