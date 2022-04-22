<?php
class pedidosDisponibles{
    private $empresa;

    private $productoNombre;

    private $descipcion;

    private $precio;

    private $cantidad;
    

    private $direccion;

    public function __construct($empresa, $productoNombre, $descipcion, $precio, $cantidad, $despcrip)
    
    {
        $this->empresa = $empresa;
        $this->productoNombre = $productoNombre;
        $this->descipcion = $descipcion;
        $this->precio = $precio;
        $this->cantidad = $cantidad;
        
        
        $this->despcrip = $despcrip;
    }

  



  

    /**
     * Get the value of empresa
     */ 
    public function getEmpresa()
    {
        return $this->empresa;
    }

    /**
     * Set the value of empresa
     *
     * @return  self
     */ 
    public function setEmpresa($empresa)
    {
        $this->empresa = $empresa;

        return $this;
    }

    /**
     * Get the value of productoNombre
     */ 
    public function getProductoNombre()
    {
        return $this->productoNombre;
    }

    /**
     * Set the value of productoNombre
     *
     * @return  self
     */ 
    public function setProductoNombre($productoNombre)
    {
        $this->productoNombre = $productoNombre;

        return $this;
    }

    /**
     * Get the value of descipcion
     */ 
    public function getDescipcion()
    {
        return $this->descipcion;
    }

    /**
     * Set the value of descipcion
     *
     * @return  self
     */ 
    public function setDescipcion($descipcion)
    {
        $this->descipcion = $descipcion;

        return $this;
    }

    /**
     * Get the value of precio
     */ 
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set the value of precio
     *
     * @return  self
     */ 
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }

    /**
     * Get the value of direccion
     */ 
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * Set the value of direccion
     *
     * @return  self
     */ 
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }
    public static function obtenerPedidos(){//nos ayuda a usarlo sin instanciarlo 
        $contenidoArhivo=file_get_contents('../data/pedidoDisponibles.json');
        echo $contenidoArhivo;
    
    }

    public static function eliminarPedido($indice){

        $contenidoArhivo=file_get_contents('../data/pedidoDisponibles.json');
        $pedidos=json_decode($contenidoArhivo,true);
        array_splice($pedidos,$indice,1);
        $archivo= fopen("../data/pedidoDisponibles.json","w");
        fwrite($archivo,json_encode($pedidos));
        fclose($archivo);
    
    
    }
}



?>