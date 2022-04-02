
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';
    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}

var clientes=[

];

var localstorage = window.localStorage;
var localstorageLogueado = window.localStorage;

if (localstorage.getItem('clientes') == null) {
    localstorage.setItem('clientes', JSON.stringify(clientes));
} else {

    clientes = JSON.parse(localstorage.getItem('clientes'))


}

function  agregaCliente() {
    const clienteInfo={
        Nombre:document.getElementById('nombre').value,
        CorreoElectronico:document.getElementById('correo').value,
        Password:document.getElementById('password').value
    };

     if(clientes!=""){

        console.log('no vaciooo');
        var aux=false;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].CorreoElectronico==clienteInfo.CorreoElectronico) {
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