
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
        console.log(clientes)
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

function inicio() {
    document.getElementById('perfilFoto').innerHTML=`
    <div style="padding: 20px; " ><img style="height: 70px; border-radius: 8rem" src="../img/fotoperfil.jpg" alt=""></div>
    <div  style="padding: 20px; font-weight:bold;">${clienteLogueado.nombre}</div>  
           `;
    
}

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
        console.log(comercios);
    }).catch(error=>{
        console.log(error);
    });
    return comercios;
} obtenerComercios();


var ordenes = [
];


//Temporal hasta que sepa como hacerlo
 function mostrarComida(){
         document.getElementById('burgerKing').innerHTML = `
     <img class="imagenBanner" src="../img/bannerbg.png" alt="">
                     <div>
                         <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                             <img class="logo-miniatura" src="../img/bglogo.png" alt="">
                             <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b> Burger King</b></h3>
                             <!--De manera temporal estrellas iran aqui puestas manualmente-->
                             <div>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                             </div>
                         </div>
                         <div>
                             <div class="lineaInferior"></div>
                         </div>
                     </div>
                     <div>
                         <div>
                             <h6
                                 style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                                 <b>Pie de manzana</b>
                             </h6>
                         </div>
                         <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                             <div>
                                 <p style="margin-left: 12px;">Crujiente pastel relleno de trozos de manzana calientes
                                     con un toque de canela.</p>
                             </div>
                             <div class="col-6">
                                 <img class="imagenesMedianas" src="../img/pieManzanaBg.png" alt="">
                             </div>
                         </div>
                         <div style="margin-left: 16px;">
                             <h6>L. 75.00 <i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                             data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                         </div>
                         <div>
                             <div class="lineaInferior"></div>
                         </div>
                     </div>
                     <div>
                         <div>
                             <h6
                                 style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                                 <b>Nuggets</b>
                             </h6>
                         </div>
                         <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                             <div>
                                 <p style="margin-left: 12px;">Acompaña tus combos favoritos con nuestros exquisitos
                                     nuggets, son tiernos y jugosos por dentro y crujientes por fuera. </p>
                             </div>
                             <div class="col-6">
                                 <img class="imagenesMedianas" src="../img/nuggetBg.png" alt="">
                             </div>
                         </div>
                         <div style="margin-left: 16px;">
                             <h6>L. 110.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
                         </div>
                         <div>
                             <div class="lineaInferior"></div>
                         </div>
                     </div>
                     <div>
                         <div>
                             <h6
                                 style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                                 <b>Bacon King Jr.</b>
                             </h6>
                         </div>
                         <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                             <div>
                                 <p style="margin-left: 12px;">Como una versión más pequeña del original, el Bacon King
                                     Jr. presenta dos empanadas de carne a la parrilla cubiertas con tocino ahumado,
                                     queso americano, salsa de tomate y mayonesa cremosa.</p>
                             </div>
                             <div class="col-6">
                                 <img class="imagenesMedianas" src="../img/baconBurguerBg.png" alt="">
                             </div>
                         </div>
                         <div style="margin-left: 16px;">
                             <h6>L. 225.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
                         </div>
                         <div>
                             <div class="lineaInferior"></div>
     `;
         document.getElementById('pzHut').innerHTML = `
         <img class="imagenBanner" src="../img/pizzaBanner.jpg" alt="">
         <div>
             <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                 <img class="logo-miniatura" src="../img/pizzaLogo.png" alt="">
                 <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b> Pizza Hut</b></h3>
                 <!--De manera temporal estrellas iran aqui puestas manualmente-->
                 <div>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star-half-stroke"></i>
                 </div>
             </div>
             <div>
                 <div class="lineaInferior"></div>
             </div>
         </div>
         <div>
             <div>
                 <h6
                     style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                     <b>Pizza Gigante</b>
                 </h6>
             </div>
             <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                 <div>
                     <p style="margin-left: 12px;">Cualquier pizza gigante, cualquier especialidad. </p>
                 </div>
                 <div class="col-6">
                     <img class="imagenesMedianas" src="../img/pizzaGigante.png" alt="">
                 </div>
             </div>
             <div style="margin-left: 16px;">
                 <h6>L. 199.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
             </div>
             <div>
                 <div class="lineaInferior"></div>
             </div>
         </div>
         <div>
             <div>
                 <h6
                     style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                     <b>Hot Wing 6 pzs</b>
                 </h6>
             </div>
             <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                 <div>
                     <p style="margin-left: 12px;">Acompaña tus combos favoritos con nuestros exquisitos
                         nuggets, son tiernos y jugosos por dentro y crujientes por fuera. </p>
                 </div>
                 <div class="col-6">
                     <img class="imagenesMedianas" src="../img/hotwings.png" alt="">
                 </div>
             </div>
             <div style="margin-left: 16px;">
                 <h6>L. 169.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
             </div>
             <div>
                 <div class="lineaInferior"></div>
             </div>
         </div>
         <div>
             <div>
                 <h6
                     style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                     <b>Hut Pack</b>
                 </h6>
             </div>
             <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                 <div>
                     <p style="margin-left: 12px;">Una pizza gigante, 8 pechurricas, un refresco 2L</p>
                 </div>
                 <div class="col-6">
                     <img class="imagenesMedianas" src="../img/hutPack.png" alt="">
                 </div>
             </div>
             <div style="margin-left: 16px;">
                 <h6>L. 339.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
             </div>
             <div>
                 <div class="lineaInferior"></div>
             </div>
         </div>`;
        document.getElementById('mcDonald').innerHTML = `
        <img class="imagenBanner" src="../img/mcbanner.jpg" alt="">
        <div>
            <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                <img class="logo-miniatura" src="../img/mclogo.png" alt="">
                <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>McDonald's</b></h3>
                <!--De manera temporal estrellas iran aqui puestas manualmente-->
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
            </div>
            <div>
                <div class="lineaInferior"></div>
            </div>
        </div>
        <div>
            <div>
                <h6
                    style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                    <b>McMuffin de pollo</b>
                </h6>
            </div>
            <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                <div>
                    <p style="margin-left: 12px;">Pan muffun inglés, mayonesa, una torta de pechuga de pollo empanizada y queso cheddar amarillo. </p>
                </div>
                <div class="col-6">
                    <img class="imagenesMedianas" src="../img/mcmuffinPollo.jpg" alt="">
                </div>
            </div>
            <div style="margin-left: 16px;">
                <h6>L. 108.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
            </div>
            <div>
                <div class="lineaInferior"></div>
            </div>
        </div>
        <div>
            <div>
                <h6
                    style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                    <b>Cajita Feliz™ de quesoburguesa</b>
                </h6>
            </div>
            <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                <div>
                    <p style="margin-left: 12px;">Cajita Feliz incluye una deliciosa Quesoburguesa, una papa kid, soda o bebida natural acompañada con un puré de manzana o yogurt de fresa, y un juguete de la promoción vigente.</p>
                </div>
                <div class="col-6">
                    <img class="imagenesMedianas" src="../img/cajitaFeliz.jpg" alt="">
                </div>
            </div>
            <div style="margin-left: 16px;">
                <h6>L. 169.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
            </div>
            <div>
                <div class="lineaInferior"></div>
            </div>
        </div>
        <div>
            <div>
                <h6
                    style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                    <b>Duo Crispy</b>
                </h6>
            </div>
            <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                <div>
                    <p style="margin-left: 12px;">
                       Disfruta de 2 McMenús de Pollo Crispy de 2 piezas cada uno con soda y papas a precio especial.</p>
                </div>
                <div class="col-6">
                    <img class="imagenesMedianas" src="../img/duocrispy.jpg" alt="">
                </div>
            </div>
            <div style="margin-left: 16px;">
                <h6>L. 289.00 <i class="fa-solid fa-circle-plus ml-1"></i></h6>
            </div>
            <div>
                <div class="lineaInferior"></div>
            </div>
        </div>
        `;
       
 } 

 function mostrarComida2(){   
   
    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php'+ `?id=${0}`,
        responseType: 'json'
    }).then(function(response){
        var restaurante = response.data;
        console.log(restaurante.restaurantes[0].nombre);
    }).catch(function(error){
        console.log(error);
    });
}  mostrarComida2();


 function ordenar() { 
    var modalToggle = document.getElementById('ordenElementos') // relatedTarget'
    var myModal;
myModal.show(modalToggle)
document.getElementById('ordenElementos').innerHTML = `
<div>
<div class="col-12 centrar mt-1">
    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b> Detalles</b></h3><br>
</div>
<div>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perferendis?</p>
    <p>Lorem ipsum dolor sit.</p>
</div>
</div>
<div class="lineaInferior"></div>
<div class="col-6" style="margin-top: 2rem;">
<p>Total</p>
</div>
<div class="col-6">
    <p>L. 0.00</p>
</div>
<div class="lineaInferior"></div>
`;
}