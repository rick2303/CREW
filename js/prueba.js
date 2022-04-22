var pedidosDisponibles=[

{
nombreEmpreza:"Pizza hut",
descripcionPedido:"Pizza grande",
totalCoste:"123lps",
clienteNombre:"Josue"

},
{
nombreEmpreza:"bigos",
descripcionPedido:"bigos grande",
totalCoste:"123lps",
clienteNombre:"carlos"
    
},

{
nombreEmpreza:"burger",
descripcionPedido:"burger grande",
totalCoste:"123lps",
clienteNombre:"amanda"
        
},


];
var obteniendoIndice = window.localStorage;
var indiceMotorista=JSON.parse(obteniendoIndice.getItem('indiceMotorista'));
var motoristaLogueado;

console.log(indiceMotorista);

function cargarInfoMotorista() {
  


        axios({
            method:'GET',
            url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php'+ `?id=${indiceMotorista}`,
            responseType:'json'
        }).then(res=>{
            
            motoristaLogueado=res.data;
            console.log("prueba motorista",motoristaLogueado.nombre);
            inicio();
        }).catch(error=>{
          
    
    
        });
    

    

     
}
cargarInfoMotorista();


function inicio() {
    document.getElementById('motoristaFotoNombre').innerHTML=`
    <div style="padding: 20px; " ><img style="height: 70px;" src="img/image 38.png" alt=""></div>
    <div  style="padding: 20px; font-weight:bold;">${motoristaLogueado.nombre}</div>
        
           
           `;
    
}


//funcion para ver si hay pedidos

function existenciaPedido() {
    if (pedidosDisponibles!="") {
        document.getElementById('circuloPedidosDisponibles').style.color='green';
        
    }else{
        document.getElementById('circuloPedidosDisponibles').style.color='rgb(179, 192, 179)';
    }
    
}
existenciaPedido();

//funcion para ver si hay pedidos ACTIVOS

function existenciaPedidoActivo() {
    if (infoMotor[0].PedidosActivos!=null) {
        document.getElementById('circuloPedidosActivos').style.color='green';

        
    }else{
        document.getElementById('circuloPedidosActivos').style.color='rgb(179, 192, 179)';
        
    }
    
}
existenciaPedidoActivo();

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
                    <div ><img src="img/Rectangle 75.png" alt=""></div>
                    <div style="margin-left: 10px;" >
                        <p style="margin-bottom: 0rem;">${pedidosDisponibles[i].nombreEmpreza}</p>
                        <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[i].descripcionPedido}</p>
                    
                    </div>
                  
                </div> 








      
        `
    }
  


   

}
renderizarPedidosDisponibles();

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
                        <p style="margin-bottom: 0rem;">${pedidosDisponibles[indice].descripcionPedido}</p>
                        <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[indice].nombreEmpreza}</p>
                    
                    </div>
                    <div style="margin-left:20px;" >
                        <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[indice].totalCoste}</p>
                     
                    
                    </div>
                </div> 


                <div class="estiloPedidoDetalle " style="margin-bottom: 30px;">
                    <div ><img src="img/Rectangle 75.png" alt=""></div>
                    <div style="margin-left: 10px;">
                        <p style="margin-bottom: 0rem;">Centro comercial aeroplaza</p>
                        <p style="margin-bottom: 0rem;">CA-5 955001581 </p>
                    
                    </div>
                    
                </div>

                
                <div class="estiloPedidoDetalle " style="margin-bottom: 30px; ">
                    <div ><img src="img/Rectangle 75.png" alt=""></div>
                    <div style="margin-left: 10px;">
                        <p style="margin-bottom: 0rem;">${pedidosDisponibles[indice].clienteNombre}</p>
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

infoMotor[0].PedidosActivos=pedidosDisponibles[indice];

console.log(infoMotor[0]);
myModalPedidoTomado.show();
modalPediosDisponibles.hide();
myModalInfoPedidoSeleccionado.hide();

pedidosDisponibles.splice(indice,1)//para eliminar de un arreglo
console.log(pedidosDisponibles);

//circulos que indican si hay actividad
existenciaPedido();

////


renderizarPedidosDisponibles();
document.getElementById('estilosmodalPediosActivos').innerHTML=`




<div class="estiloPedidoDetalle  estiloParaCadaPedidoDisponible" style="margin-bottom: 30px; margin-top: 40px;"  >
                    <div ><img src="img/Rectangle 75.png" alt=""></div>
                    <div style="margin-left: 10px;" >
                        <p style="margin-bottom: 0rem;">${infoMotor[0].PedidosActivos.nombreEmpreza}</p>
                        <p style="margin-bottom: 0rem;"> ${infoMotor[0].PedidosActivos.descripcionPedido}</p>
                    
                    </div>
                    <div style="margin-left:20px;" >
                        <p style="margin-bottom: 0rem;">  ${infoMotor[0].PedidosActivos.totalCoste}</p>
                     
                    
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

existenciaPedidoActivo();
}

//BTN PEDIDO ENTREGADO 
var modalPediosDisponibles = new bootstrap.Modal(document.getElementById('modalPediosActivos'), {
    keyboard: false
})

function btnPedidoEntregado() {
 console.log(indice)
 infoMotor[0].HistorialPedido.push(infoMotor[0].PedidosActivos);
    infoMotor[0].PedidosActivos=null;
    existenciaPedidoActivo();
    console.log(infoMotor[0].HistorialPedido);
    console.log(infoMotor[0].PedidosActivos);
    modalPediosDisponibles.hide();

}