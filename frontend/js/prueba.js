
    
    
  
    var obteniendoIndice = window.localStorage;
    var indiceMotorista=JSON.parse(obteniendoIndice.getItem('indiceMotorista'));
    var motoristaLogueado;
    var pedidosDisponibles;
    var historalPedidosAUX=[];
    
    console.log(indiceMotorista);
    //obteniendo info de motoristas

    
    function cargarInfoMotorista() {
      
    
    
            axios({
                method:'GET',
                url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php'+ `?id=${indiceMotorista}`,
                responseType:'json'
            }).then(res=>{
                
                motoristaLogueado=res.data;
                console.log("informacion motorista logueado",motoristaLogueado);
                inicio();
                existenciaPedidoActivo();
                if(motoristaLogueado.pedidosActivos!=null){
                renderizarPedidoActivo();
               
              

                }



            }).catch(error=>{
              
        
        
            });
        
    
        
    
         
    }
            
   
    cargarInfoMotorista();
  
       //obteniendo info de los pedidos disponibles
       function cargarPedidosDisponibles() {
         
      
    
    
        axios({
            method:'GET',
            url:'http://localhost/CREWGIThUB/CREW/backend/api/pedidosDisponibles.php',
            responseType:'json'
        }).then(res=>{
          
            pedidosDisponibles=res.data;
            existenciaPedido();
            console.log("informacion pedidos disponibles",pedidosDisponibles);
            renderizarPedidosDisponibles();
           
           
        }).catch(error=>{
          
    
    
        });
    

    

     
}
cargarPedidosDisponibles();
    
    
    function inicio() {
        document.getElementById('motoristaFotoNombre').innerHTML=`
        <div style="padding: 20px; " ><img style="height: 70px;" src="http://localhost/CREWGITHUB/CREW/frontend/img/image%2038.png"></div>
        <div  style="padding: 20px; font-weight:bold;">${motoristaLogueado.nombre}</div>
            
               
               `;
        
    }
    
    
    //funcion para ver si hay pedidos
    
    function existenciaPedido() {
        console.log("ecistencia pedido funcionado")
        if (pedidosDisponibles!="") {
            document.getElementById('circuloPedidosDisponibles').style.color='green';
            
        }else{
            document.getElementById('circuloPedidosDisponibles').style.color='rgb(179, 192, 179)';
        }
        
    }
    
    
    //funcion para ver si hay pedidos ACTIVOS
    
    function existenciaPedidoActivo() {
        if (motoristaLogueado.pedidosActivos!=null) {
            document.getElementById('circuloPedidosActivos').style.color='green';
    
            
        }else{
            document.getElementById('circuloPedidosActivos').style.color='rgb(179, 192, 179)';
            
        }
        
    }
   
    
    //funcion para renderizar pedidos disponibles 
    function renderizarPedidosDisponibles() {
     
            document.getElementById('pedidosCantidadDisponibles').innerHTML=``
            document.getElementById('descripcionPedidosDisponibles').innerHTML=``
        document.getElementById('pedidosCantidadDisponibles').innerHTML=`
        <div class="col-6">Disponibles</div>
        <div class="col-6"><p style=" margin-left:30%;">${pedidosDisponibles.length}</p></div>
        `
        for (let i = 0; i < pedidosDisponibles.length; i++) {
       
            document.getElementById('descripcionPedidosDisponibles').innerHTML+=`
      
            <div class="col-12"  onclick="tomarIndicePedidosDisponibles(${i})">
            
            <div class="estiloPedidoDetalle  estiloParaCadaPedidoDisponible" style="margin-bottom: 10px; margin-top: 10px;"  >
                        <div ><img src=" " alt=""></div>
                        <div style="margin-left: 10px;" >
                            <p style="margin-bottom: 0rem;">${pedidosDisponibles[i].empresa}</p>
                            <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[i].descipcion}</p>
                        
                        </div>
                      
                    </div> 
          
            `
        }
      
    
    
       
    
    }
  
    
    //renderizar info de pedido seleccionado
    var myModalInfoPedidoSeleccionado = new bootstrap.Modal(document.getElementById('modalPedioDetalle'), {
        keyboard: false
    })
    var indice;
    function tomarIndicePedidosDisponibles(indiceTomado) {
        indice=indiceTomado;
        detallePedidoSeleccionado();
    }
    
    
    function detallePedidoSeleccionado() {
       
        myModalInfoPedidoSeleccionado.show();
    document.getElementById('detallePedido').innerHTML =`
    <div class="estiloPedidoDetalle  estiloParaCadaPedidoDisponible" style="margin-bottom: 30px; margin-top: 40px;"  >
                        <div ><img src="img/Rectangle 75.png" alt=""></div>
                        <div style="margin-left: 10px;" >
                            <p style="margin-bottom: 0rem;">${pedidosDisponibles[indice].descipcion}</p>
                            <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[indice].empresa}</p>
                        
                        </div>
                        <div style="margin-left:20px;" >
                            <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[indice].precio}</p>
                         
                        
                        </div>
                    </div> 
                    <div class="estiloPedidoDetalle " style="margin-bottom: 30px;">
                        <div ><img src="img/Rectangle 75.png" alt=""></div>
                        <div style="margin-left: 10px;">
                            <p style="margin-bottom: 0rem;">${pedidosDisponibles[indice].direccion}</p>
                            <p style="margin-bottom: 0rem;">CA-5 955001581 </p>
                        
                        </div>
                        
                    </div>
                    
                    <div class="estiloPedidoDetalle " style="margin-bottom: 30px; ">
                        <div ><img src="img/Rectangle 75.png" alt=""></div>
                        <div style="margin-left: 10px;">
                            <p style="margin-bottom: 0rem;">nombre cliente</p>
                            <p style="margin-bottom: 0rem;">Direccion</p>
                        
                        </div>
                        
                    </div>
                    <div class="tomarPedidoEstilo">
                        <button class="btnTomarPedidoEstilo"  onclick="btnTomarPedido()"  style="align-self: center;">Tomar pedido</button>
                    </div>
    `
    
    
    
    
    
    
        
    }
    
    //funcion para tomar el pedido
    
    
    var myModalPedidoTomado = new bootstrap.Modal(document.getElementById('pedidoTomado'), {
        keyboard: false
    })
    var modalPediosDisponibles = new bootstrap.Modal(document.getElementById('modalPediosDisponibles'), {
        keyboard: false
    })
    function btnTomarPedido() {
    //modificando motorista
    
    let usuarioPedidoTomado ={
        nombre:motoristaLogueado.nombre,
        apellido:motoristaLogueado.apellido,
        correoElectronico:motoristaLogueado.correoElectronico,
        numeroDeTelefono:motoristaLogueado.numeroDeTelefono,
        historalPedidos:[],
        pedidosActivos:pedidosDisponibles[indice],
        contrasena:motoristaLogueado.contrasena,
    
    
        };
        

        axios({
            method:'PUT',
            url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php'+ `?id=${indiceMotorista}`,
            responseType:'json',
            data:usuarioPedidoTomado
        }).then(res=>{
            cargarInfoMotorista();
            
        }).catch(error=>{
           
    
    
        });
    myModalPedidoTomado.show();
    modalPediosDisponibles.hide();
    myModalInfoPedidoSeleccionado.hide();
    //elimimando pedido tomado por el motorista de pedidoDisponibles
    console.log('eliminar el elemento del indice' + indice);
    axios({
        method:'Delete',
        url:'http://localhost/CREWGIThUB/CREW/backend/api/pedidosDisponibles.php'+ `?id=${indice}`,
        responseType:'json'
    }).then(res=>{
     
        cargarPedidosDisponibles();
        existenciaPedido();
       
        console.log("aca se tiene que ver el pedido eliminado ya que fue tomado por el motorista",pedidosDisponibles)

    }).catch(error=>{
        console.log(error);


    });
    }

    function renderizarPedidoActivo() {
        console.log("el renderizado de los pedidos activos si funciona",motoristaLogueado.pedidosActivos.empresa)
        document.getElementById('estilosmodalPediosActivos').innerHTML=`
        
        <div class="estiloPedidoDetalle  estiloParaCadaPedidoDisponible" style="margin-bottom: 30px; margin-top: 40px;"  >
                            <div ><img src="img/Rectangle 75.png" alt=""></div>
                            <div style="margin-left: 10px;" >
                                <p style="margin-bottom: 0rem;">${motoristaLogueado.pedidosActivos.empresa}</p>
                                <p style="margin-bottom: 0rem;"> ${motoristaLogueado.pedidosActivos.descipcion}</p>
                            
                            </div>
                            <div style="margin-left:20px;" >
                                <p style="margin-bottom: 0rem;">  ${motoristaLogueado.pedidosActivos.precio}</p>
                             
                            
                            </div>
                        </div> 
        <div style="margin:30px;">
        <label><input name="opcion" va lue="1" type="radio">Tomada</label><br>
        <label ><input name="opcion"  value="2" type="radio">En camino</label><br>
        <label ><input name="opcion" value="3" type="radio">En el origen</label><br>
        <label ><input name="opcion" value="3" type="radio">En el destino</label><br>
        </div>
        <div class="tomarPedidoEstilo">
        <button class="btnTomarPedidoEstilo"  onclick="btnPedidoEntregado()"  style="align-self: center;">Pedido entregado</button>
        </div>
        `
        
    }
    
    //BTN PEDIDO ENTREGADO 
    var modalPediosDisponibles = new bootstrap.Modal(document.getElementById('modalPediosActivos'), {
        keyboard: false
    })
    
    function btnPedidoEntregado() {
   


    historalPedidosAUX.push(motoristaLogueado.pedidosActivos);
   


    
    //modificando y agregando el pedido entregado al historial
    let usuarioPedidoTomado ={
        nombre:motoristaLogueado.nombre,
        apellido:motoristaLogueado.apellido,
        correoElectronico:motoristaLogueado.correoElectronico,
        numeroDeTelefono:motoristaLogueado.numeroDeTelefono,
        historalPedidos:historalPedidosAUX,
        pedidosActivos:null,
        contrasena:motoristaLogueado.contrasena,
    
    
        };
      
        console.log("creando objeto en el boton pedidoentregado",usuarioPedidoTomado)
        

        axios({
            method:'PUT',
            url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php'+ `?id=${indiceMotorista}`,
            responseType:'json',
            data:usuarioPedidoTomado
        }).then(res=>{
            cargarInfoMotorista();
            existenciaPedidoActivo();
            
        }).catch(error=>{
           
    
    
        });





 
    
        modalPediosDisponibles.hide();
    
    }
   
    