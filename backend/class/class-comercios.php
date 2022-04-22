<?php  

    class comercios{
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