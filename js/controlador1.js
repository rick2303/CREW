
function barralateral() {
   
    document.getElementById('barralateral').style.display='block';
    document.getElementById('pantallanegra').style.display='block';

}
function cerrar() {
    document.getElementById('barralateral').style.display='none';
    document.getElementById('pantallanegra').style.display='none';
  
}

var clientes=[
    {
        nombre: 'Juan Perez',
        CorreoElectronico: 'jperez@gmail.com',
        contraseña: '12345'
    },
    {
        nombre: 'Maria Rivera',
        CorreoElectronico: 'riveraMaria3@gmail.com',
        contraseña: '54321'
    },
    {
        nombre: 'Andre Gonzalez',
        CorreoElectronico: 'andreGonzales@gmail.com',
        contraseña: 'Gonzales123'
    },
    {
        nombre: 'Jose Aguilar',
        CorreoElectronico: 'Aguilar32@gmail.com',
        contraseña: 'joseAguilar'
    },
    {
        nombre: 'Marcio Perez',
        CorreoElectronico: 'marcio_perez@gmail.com',
        contraseña: 'abdul123'
    },
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

        console.log('no vacio');
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


function mostrarComida(){
}


var comercios = [
    {
        restaurantes: [
            {
                burguer_king: [
                    {
                        nombre: 'Pie de manzana',
                        imagen: 'img/pieManzanaBg.jpg',
                        descripcion: 'Delicioso pie de manzana con una deliciosa salsa de manzana',
                        precio: 75.00
                    },
                    {
                        nombre: 'Nuggets',
                        imagen: 'img/nuggetBg.png',
                        descripcion: 'Acompaña tus combos favoritos con nuestros exquisitos nuggets, son tiernos y jugosos por dentro y crujientes por fuera.',
                        precio: 110.00
                    },
                    {
                        nombre: 'Bacon King Jr.',
                        imagen: 'img/baconKingBg.png',
                        descripcion: 'Como una versión más pequeña del original, el Bacon King Jr. presenta dos empanadas de carne a la parrilla cubiertas con tocino ahumado, queso americano, salsa de tomate y mayonesa cremosa.',
                        precio: 225.00
                    }
                ],
                mcDonalds: [
                    {
                        nombre: 'McMuffin de pollo',
                        imagen: 'img/mcmuffinPollo.png',
                        descripcion: 'Pan muffun inglés, mayonesa, una torta de pechuga de pollo empanizada y queso cheddar amarillo.' ,
                        precio:  108.00
                    },
                    {
                        nombre: 'Cajita Feliz',
                        imagen: 'img/cajitaFeliz.jpg',
                        descripcion: 'Cajita Feliz incluye una deliciosa Quesoburguesa, una papa kid, soda o bebida natural acompañada con un puré de manzana o yogurt de fresa, y un juguete de la promoción vigente.',
                        precio: 169.00
                    },
                    {
                        nombre:'Duo Crispy',
                        imagen: 'img/duoCrispy.jpg',
                        descripcion: 'Disfruta de 2 McMenús de Pollo Crispy de 2 piezas cada uno con soda y papas a precio especial.',
                        precio: 289.00
                    }
                ],
                pizzaHut: [
                    {
                        nombre: 'Pizza Gigante',
                        imagen: 'img/pizzaGigante.png',
                        descripcion: 'Cualquier pizza gigante, cualquier especialidad.',
                        precio: 199.00
                    },
                    {
                        nombre: 'Hot wings 6 pzs',
                        imagen: 'img/hotwings.png',
                        descripcion: 'Nuestras tradicionales alitas de pollo, con sabor a salsa buffalo, acompañadas con aderezo ranchero.',
                        precio: 169.00

                    },
                    {
                        nombre: 'Hut pack',
                        imagen: 'img/hutPack.png',
                        descripcion: 'Una pizza gigante, 8 pechurricas, un refresco 2L',
                        precio: 339.00
                    }
                ]
            }
        ]
    },
    {
        bebidas: [
            {
                expressoAmericano: [
                    { 
                        nombre:'Granitas Frutales',
                        imagen: 'img/granitasFrutales.png',
                        descripcion: 'Disfruta de una deliciosa y refrescante granita de tu sabor favorita de fruta.',
                        precio:  45.00
                    },
                    {
                        nombre:'Latte',
                        imagen: 'img/latte.png',
                        descripcion: 'La perfecta combinación de espresso y leche, con un sabor suave coronado con espuma.',
                        precio:  55.00
                    },
                    {
                        nombre: 'Cheseecake',
                        imagen: 'img/cheseecake.png',
                        descripcion: 'Porcion de un delicioso pastel a base de queso crema sobre una corteza de galleta cubierto con una crema ácida y glas de arandano y frutas.',
                        precio:  75.00
                    }
                ],

                buhosLiqourStore : [
                    {
                        nombre: 'Four loko',
                        imagen: 'img/fourLoko.png',
                        descripcion: 'Bebida hecha a base delicor de malta, de frutas.',
                        precio:  85.00
                    },
                    {
                        nombre: 'Tequila',
                        imagen: 'img/tequila.jpg',
                        descripcion: 'Tequilla Jose Cuervo Especial silver 750 ml',
                        precio:  485.00
                    },
                    {
                        nombre: 'Whisky',
                        imagen: 'img/whisky.jpg',
                        descripcion: 'Blended Scratch Whisky 750 ml',
                        precio: 950.00
                    }
                ],
                smothieStore: [
                    {
                        nombre: 'Mix licuado de Sandia',
                        imagen: 'img/licuadorSandia.jpg',
                        descripcion: 'Refrescante combinacion de sandia, banano, y jugo de naranja',
                        precio:  65.00
                    },
                    {
                        nombre: 'Ensalada de frutas',
                        imagen: 'img/ensaladaFrutas.jpg',
                        descripcion: 'Combinacion de frutas rebanadas ',
                        precio:  68.00
                    },
                    {
                        nombre: 'Piña loca',
                        imagen: 'img/pinaLoca.png',
                        descripcion: 'Contiene naranja, coco, piña',
                        precio:  72.00
                    }
                ]
            }
        ]
    },
    {
        supermercados: [
            {
                laColonia:[
                    {
                        nombre: 'Mantequilla',
                        imagen: 'img/mantequilla.jpg',
                        descripcion: 'Mantequilla Amarilla Dos Pinos 62.5 Gr',
                        precio:  22.90
                    },
                    {
                        nombre: 'Pasta dental',
                        imagen: 'img/pastaDental.jpg',
                        descripcion: 'Pasta Dental Colgate Total Anti Sarro 150 ml',
                        precio:  136.90
                    }
                ],
                supermecadoPaiz: [
                    {
                        nombre: 'Cereal Crunch',
                        imagen: 'img/cerealCrunch.jpg',
                        descripcion: 'CRUNCH Cereal Caja 330g',
                        precio:  71.00
                    },
                    {
                        nombre: 'Gaseosa Tropical',
                        imagen: 'img/gaseosaTropical.jpg',
                        descripcion: 'Gaseosa Tropical De Banana - 3000 ml',
                        precio:  45.80
                    }
                ]
            }
        ]
    },

    {
        farmacias: [
            {
                farmaciaKielsa:[
                    {
                        nombre: 'Alcohol clinico',
                        imagen: 'img/alcoholClinico.jpg',
                        descripcion: 'Farinter alcohol clinico 250 ml',
                        precio:  42.00
                    },
                    {
                        nombre: 'Mascarillas kn95',
                        imagen: 'img/mascarillasKn95.jpg',
                        descripcion: 'Paquete de mascarillas kn95 und x10',
                        precio:  175.00
                    }
                ],
                farmaciaSiman: [
                    {
                        nombre: 'Calmol Gotas x30 ml',
                        imagen: 'img/calmolGotas.jpg',
                        descripcion: 'Medicamento para niños con dolor y fiebre',
                        precio:  146.59
                    },
                    {
                        nombre: 'Dolo-Neuorobion',
                        imagen: 'img/doloNeuorobion.png',
                        descripcion: 'Caja de 10 tabletas dolo-neurobion',
                        precio:  132.50
                    } 
                ],
                farmaciaDelAhorro: [
                    {
                        nombre: 'Tabcin',
                        imagen: 'img/tabcin.jpg',
                        descripcion: 'Tabcin Gripe Flema y congestion en capsulas',
                        precio:  28.12
                    },
                    {
                        nombre: 'Torsan Jarabe',
                        imagen: 'img/torsanJarabe.jpg',
                        descripcion: 'Frasco de 120 ml, Jarabe para la tos',
                        precio:  132.50
                    }
                ]
            }
        ]
    }
];