
 var motoristas=[];
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';

    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}





//local storage



//

//
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

//HACIENDO CON BASE DATOS


axios({
    method:'GET',
    url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php',
  
    responseType:'json',
   
  
}).then(res=>{
    motoristas=res.data;
    



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
            url:'http://localhost/CREWGIThUB/CREW/backend/api/motoristas.php',
          
            responseType:'json',
            data:motoristaInfo,
          
        }).then(res=>{
           
        
        
        
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
    




}).catch(error=>{
 


});






   
 
    



    
     
               
 
    


  




    
    
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
