
var restaurante;
var bebidas;
var farmacia;
var supermercado;
function mostrarComida2() {

    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php' + `?id=${0}`,
        responseType: 'json'
    }).then(function (response) {
        document.getElementById("burgerKing").innerHTML = '';
        restaurante = response.data.empresas;
        console.log(restaurante);
        
        for (let j = 0; j < restaurante.length; j++) {
            if (restaurante[j].nombreEmpresa == "Burger King") {
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
                       data-bs-target="#ordenElemento" onclick="ordenComida()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (restaurante[j].nombreEmpresa == "mcDonalds") {
                document.getElementById('mcDonald').innerHTML = '';
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
                           <b>${restaurante[1].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${restaurante[1].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${restaurante[1].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${restaurante[1].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (restaurante[j].nombreEmpresa == "Pizza Hut") {
                document.getElementById('pzHut').innerHTML = '';
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
                for (let i = 0; i < restaurante.length; i++) {

                    document.getElementById('pzHut').innerHTML += `
                   <div>
                       <div>
                           <h6
                               style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                               <b>${restaurante[2].productos[i].nombre}</b>
                           </h6>
                       </div>
                       <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                           <div>
                               <p style="margin-left: 12px;">${restaurante[2].productos[i].descripcion}</p>
                           </div>
                           <div class="col-6">
                               <img class="imagenesMedianas" src="${restaurante[2].productos[i].imagen}" alt="">
                           </div>
                       </div>
                       <div style="margin-left: 16px;">
                           <h6>L. ${restaurante[2].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                           data-bs-target="#ordenElemento" onclick="ordenComida()"></i></h6>
                       </div>
                       <div>
                           <div class="lineaInferior"></div>
                       </div>
                   </div>            
    `;
                }
            }
        }

        //console.log(restaurante[0].productos[i]);

    }).catch(function (error) {
        console.log(error);
    });
}

function mostrarBebidas() {

    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php' + `?id=${1}`,
        responseType: 'json'
    }).then(function (response) {
        document.getElementById("espressoA").innerHTML = '';
        var bebida = response.data.empresas;
        console.log(bebida);
        for (let j = 0; j < bebida.length; j++) {
            if (bebida[j].nombreEmpresa == "Espresso Americano") {
                document.getElementById('espressoA').innerHTML += `
            <img class="imagenBanner" src="${bebida[0].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${bebida[0].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${bebida[0].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < bebida.length; i++) {

                    document.getElementById('espressoA').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${bebida[0].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${bebida[0].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${bebida[0].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${bebida[0].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (bebida[j].nombreEmpresa == "Buhos Liqour Store") {
                document.getElementById('buhoStore').innerHTML = '';
                document.getElementById('buhoStore').innerHTML += `
            <img class="imagenBanner" src="${bebida[1].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${bebida[1].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${bebida[1].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < bebida.length; i++) {

                    document.getElementById('buhoStore').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${bebida[1].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${bebida[1].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img style="width: 6rem; margin-left: 4rem" src="${bebida[1].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${bebida[1].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (bebida[j].nombreEmpresa == "Smothie Store") {
                document.getElementById('smothieS').innerHTML = '';
                document.getElementById('smothieS').innerHTML += `
                <img class="imagenBanner" src="${bebida[2].imagenBanner}" alt="">
                <div>
                    <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                        <img class="logo-miniatura" src="${bebida[2].imagenLogo}" alt="">
                        <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${bebida[2].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < bebida.length; i++) {

                    document.getElementById('smothieS').innerHTML += `
                   <div>
                       <div>
                           <h6
                               style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                               <b>${bebida[2].productos[i].nombre}</b>
                           </h6>
                       </div>
                       <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                           <div>
                               <p style="margin-left: 12px;">${bebida[2].productos[i].descripcion}</p>
                           </div>
                           <div class="col-6">
                               <img class="imagenesMedianas" src="${bebida[2].productos[i].imagen}" alt="">
                           </div>
                       </div>
                       <div style="margin-left: 16px;">
                           <h6>L. ${bebida[2].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                           data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                       </div>
                       <div>
                           <div class="lineaInferior"></div>
                       </div>
                   </div>            
    `;
                }
            }
        }

        //console.log(bebida[0].productos[i]);

    }).catch(function (error) {
        console.log(error);
    });
}
function mostrarFarmacia() {

    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php' + `?id=${3}`,
        responseType: 'json'
    }).then(function (response) {
        document.getElementById("kielsaFarm").innerHTML = '';
        var farmacia = response.data.empresas;
        console.log(farmacia);
        for (let j = 0; j < farmacia.length; j++) {
            if (farmacia[j].nombreEmpresa == "Farmacia Kielsa") {
                document.getElementById('kielsaFarm').innerHTML += `
            <img class="imagenBanner" src="${farmacia[0].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${farmacia[0].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${farmacia[0].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < farmacia.length-1; i++) {

                    document.getElementById('kielsaFarm').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${farmacia[0].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${farmacia[0].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${farmacia[0].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${farmacia[0].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (farmacia[j].nombreEmpresa == "Farmacia Siman") {
                document.getElementById('simanFarm').innerHTML = '';
                document.getElementById('simanFarm').innerHTML += `
            <img style="object-fit: cover; width: 20rem; margin-left: 10px;" src="${farmacia[1].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${farmacia[1].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${farmacia[1].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < farmacia.length-1; i++) {

                    document.getElementById('simanFarm').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${farmacia[1].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${farmacia[1].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${farmacia[1].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${farmacia[1].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (farmacia[j].nombreEmpresa == "Farmacia del Ahorro") {
                document.getElementById('ahorroFarm').innerHTML = '';
                document.getElementById('ahorroFarm').innerHTML += `
                <img class="imagenBanner" src="${farmacia[2].imagenBanner}" alt="">
                <div>
                    <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                        <img class="logo-miniatura" src="${farmacia[2].imagenLogo}" alt="">
                        <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${farmacia[2].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < farmacia.length-1; i++) {

                    document.getElementById('ahorroFarm').innerHTML += `
                   <div>
                       <div>
                           <h6
                               style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                               <b>${farmacia[2].productos[i].nombre}</b>
                           </h6>
                       </div>
                       <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                           <div>
                               <p style="margin-left: 12px;">${farmacia[2].productos[i].descripcion}</p>
                           </div>
                           <div class="col-6">
                               <img class="imagenesMedianas" src="${farmacia[2].productos[i].imagen}" alt="">
                           </div>
                       </div>
                       <div style="margin-left: 16px;">
                           <h6>L. ${farmacia[2].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                           data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                       </div>
                       <div>
                           <div class="lineaInferior"></div>
                       </div>
                   </div>            
    `;
                }
            }
        }

        //console.log(farmacia[0].productos[i]);

    }).catch(function (error) {
        console.log(error);
    });
}

function llamarSupermercado() {

    axios({
        method: 'GET',
        url: '../../backend/api/comercios.php' + `?id=${2}`,
        responseType: 'json'
    }).then(function (response) {
        document.getElementById("coloniaSuper").innerHTML = '';
        var supermercado = response.data.empresas;
        console.log(supermercado);
        for (let j = 0; j < supermercado.length; j++) {
            if (supermercado[j].nombreEmpresa == "La Colonia") {
                document.getElementById('coloniaSuper').innerHTML += `
            <img class="imagenBanner" src="${supermercado[0].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${supermercado[0].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${supermercado[0].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < supermercado.length; i++) {

                    document.getElementById('coloniaSuper').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${supermercado[0].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${supermercado[0].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img class="imagenesMedianas" src="${supermercado[0].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${supermercado[0].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } else if (supermercado[j].nombreEmpresa == "Supermercado Paiz") {
                document.getElementById('paizSuper').innerHTML = '';
                document.getElementById('paizSuper').innerHTML += `
            <img class="imagenBanner" src="${supermercado[1].imagenBanner}" alt="">
            <div>
                <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                    <img class="logo-miniatura" src="${supermercado[1].imagenLogo}" alt="">
                    <h3 style="font-family: 'Comfortaa'; margin-bottom: 0;"><b>${supermercado[1].nombreEmpresa}</b></h3>
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
                for (let i = 0; i < supermercado.length; i++) {

                    document.getElementById('paizSuper').innerHTML += `
               <div>
                   <div>
                       <h6
                           style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                           <b>${supermercado[1].productos[i].nombre}</b>
                       </h6>
                   </div>
                   <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                       <div>
                           <p style="margin-left: 12px;">${supermercado[1].productos[i].descripcion}</p>
                       </div>
                       <div class="col-6">
                           <img style="width: 6rem; margin-left: 4rem" class="imagenesMedianas" src="${supermercado[1].productos[i].imagen}" alt="">
                       </div>
                   </div>
                   <div style="margin-left: 16px;">
                       <h6>L. ${supermercado[1].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                       data-bs-target="#ordenElemento" onclick="ordenar()"></i></h6>
                   </div>
                   <div>
                       <div class="lineaInferior"></div>
                   </div>
               </div>            
`;
                }
            } 
        }

        //console.log(supermercado[0].productos[i]);

    }).catch(function (error) {
        console.log(error);
    });
}

function ordenComida() {
    axios({

        method: 'get',
        url: '../../backend/api/comercios.php'+ `?id=${0}`,
        responseType: 'json'

    }).then(function (response) {
        document.getElementById("ordenElementos").innerHTML = '';
        var restaurant = response.data.empresas;
        console.log(restaurant);
        
        for (let i = 0; i < response.data.empresas.length; i++) {
            if (restaurant[i].nombreEmpresa == "Burger King") {

                document.getElementById('ordenElementos').innerHTML = `
                
                <div>
                    <div>
                        <h6
                            style="font-family: 'Comfortaa'; margin-bottom: 0; margin-left: 12px; margin-top: 10px;">
                            <b>${restaurant[i].productos[i].nombre}</b>
                        </h6>
                    </div>
                    <div class="col-12 centrar mt-1" style="justify-content: space-around;align-items:center ;">
                        <div>
                            <p style="margin-left: 12px;">${restaurant[i].productos[i].descripcion}</p>
                        </div>
                        <div class="col-6">
                            <img class="imagenesMedianas" src="${restaurant[i].productos[i].imagen}" alt="">
                        </div>
                    </div>
                    <div style="margin-left: 16px;">
                        <h6>L. ${restaurant[i].productos[i].precio}<i class="fa-solid fa-circle-plus ml-1" class="modal fade" data-bs-toggle="modal"
                        data-bs-target="#ordenElemento"></i></h6>
                    </div>
                    <div>
                        <div class="lineaInferior"></div>
                    </div>
                </div>            
`;
            }
        }
    }).catch(function (error) {
        console.log(error);
    });
}

