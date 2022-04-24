
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';
    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}


// var localstorage = window.localStorage;
// var localstorageLogueado = window.localStorage;
// if (localstorage.getItem('clientes') == null) {
//     localstorage.setItem('clientes', JSON.stringify(clientes));
// } else {
//     clientes = JSON.parse(localstorage.getItem('clientes'))
// }

function  agregaCliente() {
    const clienteInfo={
        Nombre:document.getElementById('nombre').value,
        CorreoElectronico:document.getElementById('correo').value,
        Password:document.getElementById('password').value
    };

     if(clientes!=""){
        var rep=false;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].CorreoElectronico==clienteInfo.CorreoElectronico) {
                console.log('repetido')
                rep=true;
                document.getElementById('modal-body').innerHTML =`
                <h5 style="color: red" class="modal-title" id="exampleModalLabel">Al parecer usted ya tiene una cuenta registrada,por favor,intente de nuevo</h5>        
                `
                document.getElementById('cerrarRegistrar').innerHTML=`
               
                <button data-bs-toggle="modal" data-bs-target="#staticBackdropRegistrar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                `
                break;
                
            }else{
            rep=false

            }
            
        }

    }

    if(rep==false ||  clientes==""){
        if(validacionCorreo(clienteInfo.CorreoElectronico)){
            console.log(' agregado con exito');
        console.log(clientes);
        clientes.push(clienteInfo);
        localstorage.setItem('clientes', JSON.stringify(clientes));
        console.log(clientes);
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

}

function loginCliente() {
    for (let i = 0; i < clientes.length; i++) {
       if (clientes[i].CorreoElectronico==document.getElementById('usuarioLogin').value && clientes[i].Password==document.getElementById('passwordLogin').value) {
           console.log('encontrado');
           localstorageLogueado.setItem('clientesLogueado', JSON.stringify(clientes[i]));
           location.assign("http://localhost/crew/clienteLogueado.html");
           document.getElementById('usuarioLogin').value=null;
           document.getElementById('passwordLogin').value=null;
         

           break;
       }else{

        console.log('no encontrado')
       }
        
    }

    
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
    {
        nombre: 'Juan Perez',
        producto: 'Hut pack',
        cantidad: 1,
        precio: 339.00
    },
    {
        nombre: 'Maria Rivera',
        prodcuto: 'Mix licuado de Sandia',
        cantidad: 2,
        precio: 65.00
    }
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