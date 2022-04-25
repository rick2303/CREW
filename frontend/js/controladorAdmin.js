var comidas;
var farmacias;
var supermercados;
var bebidas;
var pedidosDisponibles;
var motoristas;
var pedidoAsignado;
function obtenerEmpresas(){

    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php' ,
        responseType: 'json'
    }).then(function (response) {
        
        var comercios=response.data
         comidas = comercios[0];
         bebidas=comercios[1];
         supermercados=comercios[2];
         farmacias=comercios[3];

         
        
         console.log("comercios",comercios);
        console.log("comidas",comidas);
        console.log("bebidas",bebidas);
        console.log("farmcias",farmacias);
        console.log("supér",supermercados);
        renderizarEmpresas();
        
    }).catch(function (error) {
        console.log(error);
    });
} obtenerEmpresas();

function renderizarEmpresas() {
 
//renderizando seccion de comida
    console.log("largo comida",bebidas.empresas.length)
for (let i = 0; i < bebidas.empresas.length; i++) {
    console.log("viendo nombres de empresas",bebidas.empresas[i].nombreEmpresa)

    document.getElementById("bebidas").innerHTML+=`
    <div style="margin-top:20px;">${bebidas.empresas[i].nombreEmpresa}<div/>
    
    
    `
    
}
//renderizando seccion bebidas
for (let i = 0; i < comidas.empresas.length; i++) {
    console.log("viendo nombres de empresas",comidas.empresas[i].nombreEmpresa)

    document.getElementById("comidas").innerHTML+=`
    <div style="margin-top:20px;">${comidas.empresas[i].nombreEmpresa}<div/>
    
    
    `
    
}


//renderizando seccion farmacias
for (let i = 0; i < farmacias.empresas.length; i++) {
    console.log("viendo nombres de empresas",farmacias.empresas[i].nombreEmpresa)

    document.getElementById("farmacias").innerHTML+=`
    <div style="margin-top:20px;">${farmacias.empresas[i].nombreEmpresa}<div/>
    
    
    `
    
}

//renderizando seccion supermercados
for (let i = 0; i < supermercados.empresas.length; i++) {
    console.log("viendo nombres de empresas",supermercados.empresas[i].nombreEmpresa)

    document.getElementById("supermercados").innerHTML+=`
    <div style="margin-top:20px;">${supermercados.empresas[i].nombreEmpresa}<div/>
    
    
    `
    
}

    //guardar nueva empresa
   
       


        
    
    
}
 // Onchange para seleccionar categoria
function selecCategoria(){
    let categoriaSelec = document.querySelector('#categoriaActual').value;
    console.log(categoriaSelec);
    return categoriaSelec;
    
   
}
// funcion para agregar empresa 
function agregarEmpresa() {
selecCategoria();
    
}

function cargarPedidosDisponibles() {
         
      
    
    
    axios({
        method:'GET',
        url:'http://localhost/CREWGIThUB/CREW/backend/api/pedidosDisponibles.php',
        responseType:'json'
    }).then(res=>{
      
        pedidosDisponibles=res.data;
        console.log("informacion pedidos disponibles",pedidosDisponibles);
        renderizarPedidosDisponibles();
        
       
       
    }).catch(error=>{
      


    });




 
}cargarPedidosDisponibles();

function renderizarPedidosDisponibles() {
     
    document.getElementById('pedidosCantidadDisponibles').innerHTML=``
    document.getElementById('descripcionPedidosDisponibles').innerHTML=``
document.getElementById('pedidosCantidadDisponibles').innerHTML=`
<div class="col-6">Disponibles</div>
<div class="col-6"><p style=" margin-left:30%;">${pedidosDisponibles.length}</p></div>
`
for (let i = 0; i < pedidosDisponibles.length; i++) {

    document.getElementById('descripcionPedidosDisponibles').innerHTML+=`

    <div class="col-12"  onclick="pedidoInfo(${i})">
    
    <div class="estiloPedidoDetalle  estiloParaCadaPedidoDisponible" style="margin-bottom: 10px; margin-top: 10px;"  >
                <div ><img src=" " alt=""></div>
                <div style="margin-left: 10px;">
                    <p style="margin-bottom: 0rem;">${pedidosDisponibles[i].empresa}</p>
                    <p style="margin-bottom: 0rem;"> ${pedidosDisponibles[i].descipcion}</p>
                
                </div>
              
            </div> 
  
    `
}





}
var myModalAsignarMotorista = new bootstrap.Modal(document.getElementById('asignarMotorista'), {
    keyboard: false
})
var indicePedido;
function pedidoInfo(i) {
     indicePedido=i
    myModalAsignarMotorista.show();
    pedidoAsignado=pedidosDisponibles[i];
    console.log("info pedido seleccionado",pedidosDisponibles[i]);

    obtenerMotirstas();
}
function obtenerMotirstas() {
    
    axios({
        method:'GET',
        url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php',
        responseType:'json'
    }).then(res=>{
      
        motoristas=res.data;
        console.log("informacion motoristas",motoristas);
        renderizarMotoristas();
        
        
      
       
       
    }).catch(error=>{
      


    });
}

var myModalAsignadoConExito = new bootstrap.Modal(document.getElementById('asignadoConExito'), {
    keyboard: false
})
function renderizarMotoristas() {
    document.getElementById("asignarPedido").innerHTML=``;
for (let i = 0; i < motoristas.length; i++) {
    
    document.getElementById("asignarPedido").innerHTML+=`
    <div class="row" style="margin-bottom: 40px;">
    <div class="col-6">${motoristas[i].nombre}</div>
    <div class="col-6"><button onclick="asignarElPedido(${i})" >Asignar</button></div>
  </div>
    
    `

    
    
    
}

   
    
    

    
    
}
function renderizarAdministrarMotoristas() {
    axios({
        method:'GET',
        url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php',
        responseType:'json'
    }).then(res=>{
      
        motoristas=res.data;
      
        
        document.getElementById("infomotorista").innerHTML=``;
        for (let i = 0; i < motoristas.length; i++) {
            
            document.getElementById("infomotorista").innerHTML+=`
            <div class="row" style="margin-bottom: 40px;">
            <div class="col-6">${motoristas[i].nombre}</div>
            <div class="col-6">moto</div>
          </div>
            
            `}
      
       
       
    }).catch(error=>{
      


    });

    

    

 
    


   
    
    

    
    
}renderizarAdministrarMotoristas();

function asignarElPedido(indice) {
    
  
    let usuarioPedidoTomado ={
        nombre:motoristas[indice].nombre,
        apellido:motoristas[indice].apellido,
        correoElectronico:motoristas[indice].correoElectronico,
        numeroDeTelefono:motoristas[indice].numeroDeTelefono,
        historalPedidos:[],
        pedidosActivos:pedidoAsignado,
        contrasena:motoristas[indice].contrasena,
    
    
        };
        

        axios({
            method:'PUT',
            url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php'+ `?id=${indice}`,
            responseType:'json',
            data:usuarioPedidoTomado
        }).then(res=>{
            myModalAsignadoConExito.show();
            
        }).catch(error=>{
           
    
    
        });

        axios({
            method:'Delete',
            url:'http://localhost/CREWGIThUB/CREW/backend/api/pedidosDisponibles.php'+ `?id=${indicePedido}`,
            responseType:'json'
        }).then(res=>{
            cargarPedidosDisponibles();
            
           
           
    
        }).catch(error=>{
            console.log(error);
    
    
        });
        
        
    
        
        
    }