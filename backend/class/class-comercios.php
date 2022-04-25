<?php  

    class Comercio{
        private $restaurantes;
        private $bebidas;
        private $supermercados;
        private $farmacias;
        private $empresas;


        public function __construct($restaurantes, $bebidas, $supermercados, $farmacias, $empresas){
            $this->restaurantes = $restaurantes;
            $this->bebidas = $bebidas;
            $this->supermercados = $supermercados;
            $this->farmacias = $farmacias;
            $this->empresas = $empresas;
        }

        
      
        /**
         * Get the value of restaurantes
         */ 
        public function getRestaurantes()
        {
                return $this->restaurantes;
        }

        /**
         * Set the value of restaurantes
         *
         * @return  self
         */ 
        public function setRestaurantes($restaurantes)
        {
                $this->restaurantes = $restaurantes;

                return $this;
        }

        /**
         * Get the value of bebidas
         */ 
        public function getBebidas()
        {
                return $this->bebidas;
        }

        /**
         * Set the value of bebidas
         *
         * @return  self
         */ 
        public function setBebidas($bebidas)
        {
                $this->bebidas = $bebidas;

                return $this;
        }

        /**
         * Get the value of supermercados
         */ 
        public function getSupermercados()
        {
                return $this->supermercados;
        }

        /**
         * Set the value of supermercados
         *
         * @return  self
         */ 
        public function setSupermercados($supermercados)
        {
                $this->supermercados = $supermercados;

                return $this;
        }

        /**
         * Get the value of farmacias
         */ 
        public function getFarmacias()
        {
                return $this->farmacias;
        }

        /**
         * Set the value of farmacias
         *
         * @return  self
         */ 
        public function setFarmacias($farmacias)
        {
                $this->farmacias = $farmacias;

                return $this;
        }

        /**
         * Get the value of empresas
         */ 
        public function getEmpresas()
        {
                return $this->empresas;
        }

        /**
         * Set the value of empresas
         *
         * @return  self
         */ 
        public function setEmpresas($empresas)
        {
                $this->empresas = $empresas;

                return $this;
        }


        public static function obtenerComercios(){
                $contenidoArchivo = file_get_contents("../data/comercios.json");
                echo $contenidoArchivo;
            }
            public static function obtenerComercio($indice){
                $contenidoArchivo = file_get_contents("../data/comercios.json");
                $comercios = json_decode($contenidoArchivo, true);
                echo json_encode($comercios[$indice]);
            }

           /*
            public function nuevoComercio(){
                $contenidoArhivo=file_get_contents('../data/comercios.json');
                $comercios=json_decode($contenidoArhivo,true);

                private $restaurantes;
                private $bebidas;
                private $supermercados;
                private $farmacias;
                private $empresas;
                $comercios[]=array(
                    "restaurantes"=>$this->nombre,
                    "bebidas"=>$this->apellido, //["usuario]=
                    "supermercados"=>$this->fechaNacimiento,
                    "pais"=>$this->pais
            
            
                );
                $archivo= fopen("../data/usuarios.json","w");
                fwrite($archivo,json_encode($usuario));
                fclose($archivo); 
            }
           */ 
    }
?>