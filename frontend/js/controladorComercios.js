
    function mostrarComida2() {

        axios({
            method: 'GET',
            url: '../../backend/api/comercios.php' + `?id=${0}`,
            responseType: 'json'
        }).then(function (response) {
            var restaurante = response.data.empresas;
            console.log(restaurante);
            for(let i = 0; i < restaurante.length; i++){
                //console.log(restaurante[i]);
                console.log(restaurante[0].productos[i]);
            }
            // console.log(response.data.restaurantes[0]);
            // console.log(restaurante.burguer_king[0].nombreEmpresa);
            document.getElementById('burgerKing').innerHTML += `
               <img class="" src="../img/bannerbg.png" alt="">
               <div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <img class="logo-miniatura" src="${restaurante.burguer_king[0].imagenLogo} alt="">
                       <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>BurgerKing</b></h3>
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
               </div>`;
           for(let i = 0; i < response.data.restaurantes[0].burguer_king.length; i++){
            //    console.log(response.data.restaurantes[0].burguer_king[i].imagen);
               document.getElementById('burgerKing').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${response.data.restaurantes[0].burguer_king[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${response.data.restaurantes[0].burguer_king[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${response.data.restaurantes[0].burguer_king[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${response.data.restaurantes[0].burguer_king[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>
               
`; 
              }
        }).catch(function (error) {
            console.log(error);
        });
    }

    mostrarComida2();

