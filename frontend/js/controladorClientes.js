
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';
    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}
function cargarClientes() {
    axios({
        method:'GET',
        url:'../../backend/api/clientes.php',
        responseType:'json',
    }).then(res=>{    
        clientes=res.data;
        //console.log(clientes)
    }).catch(error=>{
        console.log(error);
    });
}

cargarClientes();
var indiceClienteLogueado = window.localStorage;
var obteniendoIndice = window.localStorage;

function  agregaCliente() {

    const clienteInfo={
        nombre:document.getElementById('nombre').value,
        correoElectronico:document.getElementById('correo').value,
        contrasena:document.getElementById('password').value,
        verOrden :[],
    };
     if(clientes!=""){
        var aux=false;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].correoElectronico==clienteInfo.correoElectronico) {
                console.log("correo",clientes[i].correoElectronico)
                console.log('repetido')
                aux=true;
                document.getElementById('modal-bopy').innerHTML =`
                <h5 style="color: red" class="modal-title" id="exampleModalLabel">Al parecer usted ya tiene una cuenta registrada,por favor,intente de nuevo</h5>          
                `
                document.getElementById('cerrarRegistrar').innerHTML=`        
                <button data-bs-toggle="modal" data-bs-target="#staticBackdropRegistrar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                `
                break;   
            }else{
            aux=false
            } 
        }
    }
    if(aux==false ||  clientes==""){
        console.log(' agregado con exito');

        axios({
            method:'POST',         
            url:'../../backend/api/clientes.php',       
            responseType:'json',
            data:clienteInfo,
          
        }).then(res=>{    
            cargarClientes();
        }).catch(error=>{  
        });
        document.getElementById('nombre').value=null;
        document.getElementById('correo').value=null;
        document.getElementById('password').value=null

        document.getElementById('modal-bopy').innerHTML =`
        <h5 style="color: green" class="modal-title" id="exampleModalLabel">Sus datos han sido enviados correctamente</h5>
        
        `
        document.getElementById('cerrarRegistrar').innerHTML=`
        <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        `
    }
}

function loginCliente() {
    console.log("si esta funcionando");console.log(clientes);

    for (let i = 0; i < clientes.length; i++) {
       if (clientes[i].correoElectronico==document.getElementById('usuarioLogin').value && clientes[i].contrasena==document.getElementById('passwordLogin').value) {
           console.log('encontrado');
           indiceClienteLogueado.setItem('indiceCliente', JSON.stringify(i));
           location.assign("../../frontend/clientes/clienteLogueado.html");
         
           document.getElementById('usuarioLogin').value=null;
           document.getElementById('passwordLogin').value=null;
           break;
       }else{
        console.log('no encontrado')
       }
        
    }
    
}

var indiceCliente=JSON.parse(obteniendoIndice.getItem('indiceCliente'));
var indiceComercio = JSON.parse(obteniendoIndice.getItem('indiceComercio'));

var clienteLogueado;



function cargarInfoCliente() {
        axios({
            method:'GET',
            url:'../../backend/api/clientes.php'+ `?id=${indiceCliente}`,
            responseType:'json'
        }).then(res=>{
            
            clienteLogueado=res.data;
            console.log("prueba cliente",clienteLogueado.nombre);
            inicio();
            existenciaPedidoActivo();
        }).catch(error=>{
        });
     
}
cargarInfoCliente();
function inicio() {
    document.getElementById('perfilFoto').innerHTML=`
    <div style="padding: 20px; " ><img style="height: 70px; border-radius: 8rem" src="../img/fotoperfil.jpg" alt=""></div>
    <div  style="padding: 20px; font-weight:bold;">${clienteLogueado.nombre}</div>  
           `;
    
} 
function validacionCorreo(correo) {
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);
    if(valido){
        return true;
    }else{
        console.log('no valido');
        return false;
    }
}
var comercios=[];
var restaurantes = [];
function obtenerComercios(){
    
    axios({
        method:'GET',
        url:'../../backend/api/comercios.php',
        responseType:'json'
    }).then(res=>{
        comercios=res.data;
        //console.log(comercios);
    }).catch(error=>{
        console.log(error);
    });
    return comercios;
} obtenerComercios();


function verOrdenes(){
    axios({
        method:'GET',
        url:'../../backend/api/clientes.php'+ `?id=${indiceCliente}`,
        responseType:'json'
    }).then(res=>{
        var ordenes=res.data.verOrden;
        console.log(ordenes);
        for(let i = 0; i<ordenes.length; i++){
            document.getElementById('carritoCompras').innerHTML = '';
            document.getElementById('carritoCompras').innerHTML=`
        <div>
                            <div class="col-12 centrar mt-1">
                                <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b> Detalles</b></h3><br>
                            </div>
                            <div>
                                <br>
                                <b>${res.data.verOrden[i].producto}</b>
                                <p>Cantidad: ${res.data.verOrden[i].cantidad}</p>
                            </div>
                        </div>
                        <div class="lineaInferior"></div>
                        <div class="col-6" style="margin-top: 2rem;">
                            <p>Total:</p>
                        </div>
                            <div class="col-6">
                                <p>L. ${res.data.verOrden[i].precio}</p>
                            </div>
                            <div class="lineaInferior"></div>
                        <div class=" modal-footer" style="justify-content: flex-end!important; margin-top: 4rem;">
                       
                           <a  href = "estadoEntrega.html" > <button type="button" class="btn-pagar" >Pagar</button></a>
                    </div>
        `;
        }
    }).catch(error=>{
        console.error(error);
    });
}


    

