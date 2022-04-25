
 var motoristas=[];

 var indiceMotoristaLogueado = window.localStorage;
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';

    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}


function cargar(params) {
    
}
// cargar usuarios

function cargarMotoristas() {
    console.log("holap")
    axios({
        method:'GET',
        url:'../../backend/api/motoristas.php',
        responseType:'json',
    }).then(res=>{
        
        motoristas=res.data;
        console.log(motoristas)

     
    }).catch(error=>{
        console.log(error);


    });
}

cargarMotoristas();
//agregando motorista

function  agregaMotorista() {



    const motoristaInfo={
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        correoElectronico:document.getElementById('correo').value,
        contrasena:document.getElementById('password').value,
        numeroDeTelefono:document.getElementById('numero_Telefonico').value,
        historalPedidos :[],
        pedidosActivos :null
    };
     //comprobando usuario repetido
     if(motoristas!=""){

        console.log('no vaciooo');
        var aux=false;
        for (let i = 0; i < motoristas.length; i++) {
            if (motoristas[i].correoElectronico==motoristaInfo.correoElectronico) {
                console.log("correo",motoristas[i].correoElectronico)
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
      
      
        console.log(motoristas);


        //preticion para agregarlo

        axios({
            method:'POST',
            
            url:'../../backend/api/pendientesMotoristas.php',
          
            responseType:'json',
            data:motoristaInfo,
          
        }).then(res=>{    
            cargarMotoristas();
        }).catch(error=>{  
        });
        //
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
  
}
//Login motorista motorista
function btnIngresar() {
console.log("si esta funcionando");console.log(motoristas);

    for (let i = 0; i < motoristas.length; i++) {
       if (motoristas[i].correoElectronico==document.getElementById('usuarioLogin').value && motoristas[i].contrasena==document.getElementById('passwordLogin').value) {
           console.log('encontrado');
           indiceMotoristaLogueado.setItem('indiceMotorista', JSON.stringify(i));
      
    
          
           location.assign("../../frontend/motoristas/motoristaLogueado.html");
         
           document.getElementById('usuarioLogin').value=null;
           document.getElementById('passwordLogin').value=null;
         

           break;
       }else{

        console.log('no encontrado')
       }
        
    }

    
}
