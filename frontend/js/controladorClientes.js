
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';
    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}


function  agregaCliente() {

    const clienteInfo={
        nombre:document.getElementById('nombre').value,
        correoElectronico:document.getElementById('correo').value,
        contrasena:document.getElementById('password').value,
        verOrden :[],
    };
     //comprobando usuario repetido
     if(clientes!=""){

        console.log('no vaciooo');
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
        console.log(clientes);
        console.log(clientes);

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
function cargarClientes() {
    axios({
        method:'GET',
        url:'../../backend/api/clientes.php',
        responseType:'json',
    }).then(res=>{  
        clientes=res.data;
        console.log(clientes)
     
    }).catch(error=>{
        console.log(error);

    });
}

cargarClientes();
function loginCliente() {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].CorreoElectronico==document.getElementById('usuarioLogin').value && clientes[i].Password==document.getElementById('passwordLogin').value) {
            console.log('encontrado');
            location.assign("../../frontend/clientes/clienteLogueado.html");
            document.getElementById('usuarioLogin').value=null;
            document.getElementById('passwordLogin').value=null;
            break;
        }else{
 
         console.log('no encontrado')
        }
         console.log(clientes[i].CorreoElectronico);
     }
    console.log("Funcionando");
   axios({
    url: '../../backend/api/clientes.php',
    type: 'GET',
    success: function(response){
       
   }
});

    
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

function mostrarComida(){
}

var ordenes = [
];



function verOrden(){
    var tabla = document.getElementById('tabla');
    var total = 0;
    for(var i = 0; i < ordenes.length; i++){
        var fila = tabla.insertRow(i);
        var celdaNombre = fila.insertCell(0);
        var celdaProducto = fila.insertCell(1);
        var celdaCantidad = fila.insertCell(2);
        var celdaPrecio = fila.insertCell(3);
        celdaNombre.innerHTML = ordenes[i].nombre;
        celdaProducto.innerHTML = ordenes[i].producto;
        celdaCantidad.innerHTML = ordenes[i].cantidad;
        celdaPrecio.innerHTML = ordenes[i].precio;
        total += ordenes[i].precio;
    }
    var fila = tabla.insertRow(i);
    var celdaTotal = fila.insertCell(0);
    celdaTotal.innerHTML = 'Total';
    var celdaTotalPrecio = fila.insertCell(1);
    celdaTotalPrecio.innerHTML = total;
}