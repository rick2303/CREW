
function barralateral() {

    document.getElementById('barralateral').style.display = 'block';
    document.getElementById('pantallanegra').style.display = 'block';

}
function cerrar() {
    document.getElementById('barralateral').style.display = 'none';
    document.getElementById('pantallanegra').style.display = 'none';

}

function cargarClientes() {
    axios({
        method: 'GET',
        url: '../../backend/api/clientes.php',
        responseType: 'json',
    }).then(res => {
        clientes = res.data;
        console.log(clientes)
    }).catch(error => {
        console.log(error);
    });
}

cargarClientes();
// var indiceClienteLogueado = window.localStorage;
// var obteniendoIndice = window.localStorage;
function agregaCliente() {
    const clienteInfo = {
        Nombre: document.getElementById('nombre').value,
        CorreoElectronico: document.getElementById('correo').value,
        Password: document.getElementById('password').value
    };

    if (clientes != "") {
        var rep = false;
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].CorreoElectronico == clienteInfo.CorreoElectronico) {
                console.log('repetido')
                rep = true;
                document.getElementById('modal-body').innerHTML = `
        <h5 style="color: red" class="modal-title" id="exampleModalLabel">Al parecer usted ya tiene una cuenta registrada,por favor,intente de nuevo</h5>        
        `
                document.getElementById('cerrarRegistrar').innerHTML = `
       
        <button data-bs-toggle="modal" data-bs-target="#staticBackdropRegistrar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        `
                break;

            } else {
                rep = false

            }

        }

    }

    if (rep == false || clientes == "") {
        if (validacionCorreo(clienteInfo.CorreoElectronico)) {
            console.log(' agregado con exito');
            console.log(clientes);
            clientes.push(clienteInfo);
            localstorage.setItem('clientes', JSON.stringify(clientes));
            console.log(clientes);

            document.getElementById('nombre').value = null;
            document.getElementById('correo').value = null;
            document.getElementById('password').value = null

            document.getElementById('modal-bopy').innerHTML = `
<h5 style="color: green" class="modal-title" id="exampleModalLabel">Sus datos han sido enviados correctamente</h5>

`
            document.getElementById('cerrarRegistrar').innerHTML = `
<button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
`

        }
    }
}


    function loginCliente() {
        console.log("si esta funcionando"); console.log(clientes);

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].correoElectronico == document.getElementById('usuarioLogin').value && clientes[i].contrasena == document.getElementById('passwordLogin').value) {
                console.log('encontrado');
                indiceClienteLogueado.setItem('indiceCliente', JSON.stringify(i));
                location.assign("../../frontend/clientes/clienteLogueado.html");

                document.getElementById('usuarioLogin').value = null;
                document.getElementById('passwordLogin').value = null;
                break;
            } else {

            }

        }

    }

    function loginCliente() {
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].CorreoElectronico == document.getElementById('usuarioLogin').value && clientes[i].Password == document.getElementById('passwordLogin').value) {
                console.log('encontrado');
                localstorageLogueado.setItem('clientesLogueado', JSON.stringify(clientes[i]));
                location.assign("http://localhost/crew/clienteLogueado.html");
                document.getElementById('usuarioLogin').value = null;
                document.getElementById('passwordLogin').value = null;


                break;
            } else {


                console.log('no encontrado')
            }

        }

    }

    var indiceCliente = JSON.parse(obteniendoIndice.getItem('indiceCliente'));
    var indiceComercio = JSON.parse(obteniendoIndice.getItem('indiceComercio'));

    var clienteLogueado;

    function inicio() {
        document.getElementById('perfilFoto').innerHTML = `
    <div style="padding: 20px; " ><img style="height: 70px; border-radius: 8rem" src="../img/fotoperfil.jpg" alt=""></div>
    <div  style="padding: 20px; font-weight:bold;">${clienteLogueado.nombre}</div>  
           `;

    }

    function cargarInfoCliente() {
        axios({
            method: 'GET',
            url: '../../backend/api/clientes.php' + `?id=${indiceCliente}`,
            responseType: 'json'
        }).then(res => {

            clienteLogueado = res.data;
            console.log("prueba cliente", clienteLogueado.nombre);
            inicio();
            existenciaPedidoActivo();
        }).catch(error => {
        });

    }
    cargarInfoCliente();



    function validacionCorreo(correo) {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var valido = expReg.test(correo);
        if (valido) {
            return true;
        } else {
            console.log('no valido');
            return false;
        }
    }

    var comercios = [];
    var restaurantes = [];
    function obtenerComercios() {

        axios({
            method: 'GET',
            url: '../../backend/api/comercios.php',
            responseType: 'json'
        }).then(res => {
            comercios = res.data;
            console.log(comercios);
        }).catch(error => {
            console.log(error);
        });
        return comercios;
    } obtenerComercios();

function ordenes(){
    
}




    

