<?php
class Cliente{

    private $nombre;

    private $correoElectronico;

    private $verOrden;

    private $contrasena;


    public function __construct($nombre, $correoElectronico, $verOrden, $contrasena, )
    {
        $this->nombre = $nombre;
        $this->correoElectronico = $correoElectronico;
        $this->verOrden = $verOrden;
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
     * Get the value of verOrden
     */ 
    public function getVerOrden()
    {
        return $this->verOrden;
    }

    /**
     * Set the value of verOrden
     *
     * @return  self
     */ 
    public function setVerOrden($verOrden)
    {
        $this->verOrden = $verOrden;

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

    
public function guardarCLiente(){
    $contenidoArhivo=file_get_contents('../data/clientes.json');
    $cliente=json_decode($contenidoArhivo,true);
    $cliente[]=array( // agregando cliente
        "nombre"=>$this->nombre,
        "correoElectronico"=>$this->correoElectronico,
        "verOrden"=>$this->verOrden,
        "contrasena"=>$this->contrasena
    );
    $archivo= fopen("../data/clientes.json","w");
    fwrite($archivo,json_encode($cliente));
    fclose($archivo); 
}
public static function obtenerClientes(){
    $contenidoArhivo=file_get_contents('../data/clientes.json');
    echo $contenidoArhivo;

}
public static function obtenerCliente($indice){
    $contenidoArhivo=file_get_contents('../data/clientes.json');
    $clientes=json_decode($contenidoArhivo,true);
   echo json_encode($clientes[$indice]);
    

}
}


?>