

function barralateral() {
   
    document.getElementById('barralateral').style.display='block';

    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}


var motoristas=[


];


//local storage



//
var localstorage = window.localStorage;
var localstorageLogueado = window.localStorage;

if (localstorage.getItem('motoristas') == null) {
    localstorage.setItem('motoristas', JSON.stringify(motoristas));
} else {

    motoristas = JSON.parse(localstorage.getItem('motoristas'))


}
//
//agregando motorista

function  agregaMotorista() {



    const motoristaInfo={
        Nombre:document.getElementById('nombre').value,
        Apellido:document.getElementById('apellido').value,
        CorreoElectronico:document.getElementById('correo').value,
        Password:document.getElementById('password').value,
        NumeroTelefono:document.getElementById('numero_Telefonico').value,
        HistorialPedido :[],
        PedidosActivos :null



    };

     //comprobando usuario repetido
     if(motoristas!=""){

        console.log('no vaciooo');
        var aux=false;
        for (let i = 0; i < motoristas.length; i++) {
            if (motoristas[i].CorreoElectronico==motoristaInfo.CorreoElectronico) {
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
    if(aux==false ||  motoristas==""){

        console.log(' agregado con exito');
        console.log(motoristas);
        motoristas.push(motoristaInfo);
        localstorage.setItem('motoristas', JSON.stringify(motoristas));
        console.log(motoristas);
        document.getElementById('nombre').value=null;
        document.getElementById('apellido').value=null;
        document.getElementById('correo').value=null;
        document.getElementById('password').value=null
        document.getElementById('numero_Telefonico').value=null;

        document.getElementById('modal-bopy').innerHTML =`
        <h5 style="color: green" class="modal-title" id="exampleModalLabel">Sus datos han sido enviados correctamente</h5>
        
        `
        document.getElementById('cerrarRegistrar').innerHTML=`
        <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        `

    }
    /*
         if(motoristas==""){

        console.log('vaciooo');
        motoristas.push(motoristaInfo);
        console.log(motoristas);
        document.getElementById('nombre').value=null;
        document.getElementById('apellido').value=null;
        document.getElementById('correo').value=null;
        document.getElementById('password').value=null
        document.getElementById('numero_Telefonico').value=null;
        document.getElementById('modal-bopy').innerHTML =`
        <h5 style="color: green" class="modal-title" id="exampleModalLabel">Sus datos han sido enviados correctamente</h5>
        
        `
    }
     */
 
    



    
     
               
 
    


  




    
    
}
//Login motorista motorista
function loginMotorista() {
    for (let i = 0; i < motoristas.length; i++) {
       if (motoristas[i].CorreoElectronico==document.getElementById('usuarioLogin').value && motoristas[i].Password==document.getElementById('passwordLogin').value) {
           console.log('encontrado');
           localstorageLogueado.setItem('motoristasLogueado', JSON.stringify(motoristas[i]));
          
           location.assign("http://localhost/CREWGITHUB/CREW/motoristaLogueado.html");
         
           document.getElementById('usuarioLogin').value=null;
           document.getElementById('passwordLogin').value=null;
         

           break;
       }else{

        console.log('no encontrado')
       }
        
    }

    
}
