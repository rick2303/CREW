<?php  

    class Comercio{
        private $restaurantes;
        private $bebidas;
        private $supermercados;
        private $farmacias;


        public function __construct($restaurantes, $bebidas, $supermercados, $farmacias)
        {
            $this->restaurantes = $restaurantes;
            $this->bebidas = $bebidas;
            $this->supermercados = $supermercados;
            $this->farmacias = $farmacias;
        }

        public function guardarComercio(){
                $contenidoArchivo= file_get_contents("../../data/comercios.json");
                $comercios = json_decode($contenidoArchivo, true);
                $comercios[]=array(
                        "restaurantes"=>$this->restaurantes,
                        "bebidas"=>$this->bebidas,
                        "supermercados"=>$this->supermercados,
                        "farmacias"=>$this->farmacias
                );
                $archivo = fopen("../../data/comercios.json", "w"); //w para sustituir el contenido
                fwrite($archivo, json_encode($comercios));
        }
        public static function obtenerComercios(){
            $contenidoArchivo = file_get_contents("../data/comercios.json");
            echo $contenidoArchivo;
        }
        public static function obtenerComercio($indice){
            $contenidoArchivo = file_get_contents("../../data/comercios.json");
            $comercios = json_decode($contenidoArchivo, true);
            echo json_encode($comercios[$indice]);
        }
        public function actualizarComercio($indice){
            $contenidoArchivo = file_get_contents("../../data/comercios.json");
            $comercios = json_decode($contenidoArchivo, true);
            //$comercio = $comercios[$indice];
            $comercio = array(
                "restaurantes"=>$this->restaurantes,
                "bebidas"=>$this->bebidas,
                "supermercados"=>$this->supermercados,
                "farmacias"=>$this->farmacias
            );
            $comercios[$indice] = $comercio;
            $archivo = fopen("../../data/comercios.json", "w");
            fwrite ($archivo, json_encode($comercios));
            fclose($archivo);
        
        }
        public static function eliminarComercio($indice){
            $contenidoArchivo = file_get_contents("../../data/comercios.json");
            $comercios = json_decode($contenidoArchivo, true);
            array_splice($comercios, $indice, 1);
            $archivo = fopen("../../data/comercios.json", "w");
            fwrite ($archivo, json_encode($comercios));
            fclose($archivo);
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
    }
?>