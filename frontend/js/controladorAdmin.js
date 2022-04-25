var comidas;
var farmacias;
var supermercados;
var bebidas;
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
 

    



    
    
}