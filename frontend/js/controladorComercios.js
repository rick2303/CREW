
function mostrarComida2() {

    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php' + `?id=${0}`,
        responseType: 'json'
    }).then(function (response) {
        document.getElementById("burgerKing").innerHTML = '';
        var restaurante = response.data.empresas;
        console.log(restaurante);
        for(let j = 0; j < restaurante.length; j++){
            if(restaurante[j].nombreEmpresa=="Burger King"){
                document.getElementById('burgerKing').innerHTML += `
            <img class="imagenBanner" src="${restaurante[0].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${restaurante[0].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${restaurante[0].nombreEmpresa}</b></h3>
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
            for (let i = 0; i < restaurante.length; i++) {
           
                document.getElementById('burgerKing').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${restaurante[0].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${restaurante[0].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${restaurante[0].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${restaurante[0].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
            }
            } else if(restaurante[j].nombreEmpresa=="mcDonalds"){
                document.getElementById('mcDonald').innerHTML ='';
                document.getElementById('mcDonald').innerHTML += `
            <img class="imagenBanner" src="${restaurante[1].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${restaurante[1].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${restaurante[1].nombreEmpresa}</b></h3>
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
            for (let i = 0; i < restaurante.length; i++) {
           
                document.getElementById('mcDonald').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${restaurante[0].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${restaurante[0].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${restaurante[0].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${restaurante[0].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
            }
            } else if(restaurante[j].nombreEmpresa=="Pizza Hut"){
                document.getElementById('pzHut').innerHTML ='';
                document.getElementById('pzHut').innerHTML += `
                <img class="imagenBanner" src="${restaurante[2].imagenBanner}" alt="">
                <div>
                    <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                        <img class="logo-miniatura" src="${restaurante[2].imagenLogo}" alt="">
                        <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${restaurante[2].nombreEmpresa}</b></h3>
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
            }
        }
        
        //console.log(restaurante[0].productos[i]);
        
    }).catch(function (error) {
        console.log(error);
    });
}

