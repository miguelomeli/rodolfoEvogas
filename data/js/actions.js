




// *********  ACCIONES DE LA PAGINA  CONFIGURACION --> XXX   ********* //
function liberarPRT() {
    let _b_1 = $("#bbb_1").val();
    if (_b_1 == 'HABILITADA') {
        $("#b_1").val('HABILITADA');
        $("#b_b_1").show();
        $("#b_b_2").show();
        $("#b_b_3").show();
        $("#b_b_4").show();
        $("#b_b_5").show();

        $("#b_b_5").show();
        $("#b_b_6").show();
        $("#b_b_7").show();
        $("#b_b_8").show();


    } else {
        $("#b_1").val('DESHABILITADA');
        $("#b_b_1").hide();
        $("#b_b_2").hide();
        $("#b_b_3").hide();
        $("#b_b_4").hide();
        $("#b_b_5").hide();

        $("#b_b_5").hide();
        $("#b_b_6").hide();
        $("#b_b_7").hide();
        $("#b_b_8").hide();

    }
}

function getPRT() {
    let _b_1 = $("#bbb_1").val();
    $("#bbb_1").val(_b_1);
    liberarPRT();
}

function getNetwork() {
    let _a_1 = $("#a_1").val();
    $("#aaa_1").val(_a_1);
    liberarRed();
}

function getImpresora() {
    //console.log("getImpresora");
    let _b_5 = $("#b_5").val();
    if (_b_5 == '') {
        _b_5 = 'WEB';
    }
    //console.log(_b_5);
    $("#bbb_5").val(_b_5);
    liberarTipoImpresora();
}

function liberarRed() {
    let _a_1 = $("#aaa_1").val();
    if (_a_1 == 'DHCP') {
        $("#a_1").val('DHCP');
        $("#d_a_2").hide().val('');
        $("#d_a_3").hide().val('');
        $("#d_a_4").hide().val('');
    } else {
        $("#a_1").val('ESTATICA');
        $("#d_a_2").show().val('');
        $("#d_a_3").show().val('');
        $("#d_a_4").show().val('');
    }
}


function liberarTipoImpresora() {
    let _b_5 = $("#bbb_5").val();
    if (_b_5 == 'WEB') {
        $("#b_5").val('WEB');
        $("#b_b_1").show();
        $("#b_b_2").show();
        $("#b_b_3").show();
        $("#b_b_6").hide();
    } else {
        $("#b_5").val('SERIAL');
        $("#b_b_1").hide();
        $("#b_b_2").hide();
        $("#b_b_3").hide();
        $("#b_b_6").show();
    }
}



function saveNetwork() {
    let _a_1 = $("#a_1").val();
    let _a_2 = $("#a_2").val();
    let _a_3 = $("#a_3").val();
    let _a_4 = $("#a_4").val();
    let _a_5 = $("#a_5").val();
    let _a_6 = $("#a_6").val();
    let _a_7 = $("#a_7").val();
    let _a_8 = $("#a_8").val();
    let _a_9 = $("#a_9").val();
    if (_a_1 == 'ESTATICA') {
        if (_a_2 == '') {
            alert("ingresa IP MODULO");
            $("#a_2").focus();
            return false;
        }
        if (_a_3 == '') {
            alert("ingresa GATEWAY MODULO");
            $("#a_3").focus();
            return false;
        }
        if (_a_4 == '') {
            alert("ingresa NETMASK MODULO");
            $("#a_4").focus();
            return false;
        }
    }
    if (_a_5 == '') {
        alert("ingresa DNS/IP SERVIDOR REMOTO");
        $("#a_5").focus();
        return false;
    }
    if (_a_6 == '') {
        alert("ingresa PUERTO DE ACCESO SERVIDOR REMOTO");
        $("#a_6").focus();
        return false;
    }
    if (_a_8 == '') {
        alert("ingresa SSID");
        $("#a_8").focus();
        return false;
    }
    if (_a_9 == '') {
        alert("ingresa CONTRASEÑA SSID");
        $("#a_9").focus();
        return false;
    }
    $("#btn_a").hide();
    $("#cnt_a").show();
    $.ajax({
        async: true,
        type: "POST",
        url: "/save",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGred\":{\"TipoIP\":\"" + _a_1 +
            "\",\"IP\":\"" + _a_2 +
            "\",\"GATEWAY\":\"" + _a_3 +
            "\",\"SUBMASK\":\"" + _a_4 +
            "\",\"serverRemoto\":\"" + _a_5 +
            "\",\"puertoServerRemoto\":\"" + _a_6 +
            "\",\"URL\":\"" + _a_7 +
            "\",\"SSID\":\"" + _a_8 +
            "\",\"passwordSSID\":\"" + _a_9 +
            "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_a").show();
            $("#cnt_a").hide();
        },
        error: function (jqXHR, exception) {
            alert('datos NO guardados');
            $("#btn_a").show();
            $("#cnt_a").hide();
            return false;
        }
    });
    return false;
}

function savePRT() {
    let _b_1 = $("#b_1").val();
    let _b_2 = $("#b_2").val();
    let _b_3 = $("#b_3").val();
    let _b_4 = $("#b_4").val();
    let _b_5 = $("#b_5").val();
    if (_b_1 == '') {
        alert("ingresa estatus impresora");
        $("#b_1").focus();
        return false;
    }
    if (_b_2 == '') {
        alert("ingresa ip impresora");
        $("#b_2").focus();
        return false;
    }
    if (_b_3 == '') {
        alert("ingresa id impresora");
        $("#b_3").focus();
        return false;
    }
    if (_b_4 == '') {
        alert("ingresa puerto impresora");
        $("#b_4").focus();
        return false;
    }
    if (_b_5 == '') {
        alert("ingresa estatus impresora");
        $("#b_1").focus();
        return false;
    }
    $("#btn_b").hide();
    $("#cnt_b").show();
    $.ajax({
        async: true,
        type: "POST",
        url: "/save",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGprt\":{\"prt\":\"" + _b_1 +
            "\",\"IPPRT\":\"" + _b_2 +
            "\",\"IPID\":\"" + _b_3 +
            "\",\"IPPORT\":\"" + _b_4 +
            "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_b").show();
            $("#cnt_b").hide();
        },
        error: function (jqXHR, exception) {
            alert('datos NO guardados');
            $("#btn_b").show();
            $("#cnt_b").hide();
            return false;
        }
    });
    return false;
}

function saveEVO() {
    let _c_1 = $("#c_1").val();
    let _c_2 = $("#c_2").val();
    let _c_3 = $("#c_3").val();
    let _c_4 = $("#c_4").val();
    let _c_5 = $("#c_5").val();
    if (_c_1 == '') {
        alert("ingresa SERIE EVoGAS");
        $("#c_1").focus();
        return false;
    }
    if (_c_2 == '') {
        alert("ingresa ID EVoGAS");
        $("#c_2").focus();
        return false;
    }
    if (_c_3 == '') {
        alert("ingresa NOMBRE DEL SITIO");
        $("#c_3").focus();
        return false;
    }
    if (_c_4 == '') {
        alert("ingresa DOMICILIO DEL SITIO");
        $("#c_4").focus();
        return false;
    }
    if (_c_5 == '') {
        alert("ingresa ID SITIO");
        $("#c_5").focus();
        return false;
    }
    $("#btn_c").hide();
    $("#cnt_c").show();
    $.ajax({
        async: true,
        type: "POST",
        url: "/save",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGevo\":{\"serieEvo\":\"" + _c_1 +
            "\",\"IDEvo\":\"" + _c_2 +
            "\",\"nombreEstacion\":\"" + _c_3 +
            "\",\"calleEstacion\":\"" + _c_4 +
            "\",\"numeroEstacion\":\"" + _c_5 +
            "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_c").show();
            $("#cnt_c").hide();
        },
        error: function (jqXHR, exception) {
            alert('datos NO guardados');
            $("#btn_c").show();
            $("#cnt_c").hide();
            return false;
        }
    });
    return false;
}

function saveSeguridad() {
    let _d_1 = $("#d_1").val();
    let _d_2 = $("#d_2").val();
    let _d_3 = $("#d_3").val();
    let _d_4 = $("#d_4").val();
    let _d_5 = $("#d_5").val();
    let _d_6 = $("#d_6").val();
    if (_d_1 == '') {
        alert("ingresa NOMBRE AP");
        $("#d_1").focus();
        return false;
    }
    if (_d_2 == '') {
        alert("ingresa CONTRASEÑA AP");
        $("#d_2").focus();
        return false;
    }
    if (_d_3 == '') {
        alert("ingresa USUARIO FS (EDITAR)");
        $("#d_3").focus();
        return false;
    }
    if (_d_4 == '') {
        alert("ingresa CONTRASEÑA FS (EDITAR)");
        $("#d_4").focus();
        return false;
    }
    if (_d_5 == '') {
        alert("ingresa CONTRASEÑA CONFIGURACION");
        $("#d_5").focus();
        return false;
    }
    if (_d_6 == '') {
        alert("ingresa CONTRASEÑA CLIENTES");
        $("#d_6").focus();
        return false;
    }
    $("#btn_d").hide();
    $("#cnt_d").show();
    $.ajax({
        async: true,
        type: "POST",
        url: "/save",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGseguridad\":{\"apName\":\"" + _d_1 +
            "\",\"passWordAP\":\"" + _d_2 +
            "\",\"usuarioEdit\":\"" + _d_3 +
            "\",\"claveEdit\":\"" + _d_4 +
            "\",\"claveCfg\":\"" + _d_5 +
            "\",\"claveClientes\":\"" + _d_6 +
            "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_d").show();
            $("#cnt_d").hide();
        },
        error: function (jqXHR, exception) {
            alert('datos NO guardados');
            $("#btn_d").show();
            $("#cnt_d").hide();
            return false;
        }
    });
    return false;
}
// ********* FIN ACCIONES DE LA PAGINA CONFIGURACION --> XXX ********* //

// *********  ACCIONES DE LA PAGINA  CONFIGURACION --> XXX   ********* //
function CambiarContrasena() {
    let pwd_1 = $("#pwd_1").val();
    let pwd_2 = $("#pwd_2").val();
    if (pwd_1 == '') {
        alert("ingresa la contraseña supervisor");
        $("#pwd_1").focus();
        return false;
    }
    if (pwd_2 == '') {
        alert("ingresa la confirmacion de contraseña");
        $("#pwd_1").focus();
        return false;
    }
    if (pwd_1 != pwd_2) {
        alert("las contraseñas no son iguales");
        $("#pwd_1").focus();
        return false;
    }
    $.ajax({
        async: true,
        type: "POST",
        url: "/save",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGclientesPSWSUP\":{\"pwd_1\":\"" + pwd_1 +
            "\",\"pwd_2\":\"" + pwd_2 +
            "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
            alert('datos guardados correctamente');
        },
        error: function (jqXHR, exception) {
            alert('datos NO guardados');
            return false;
        }
    });
    return false;
}

function CambiarContrasenaAdministrador() {
    let pwd_1 = $("#pwd_1").val();
    let pwd_2 = $("#pwd_2").val();
    if (pwd_1 == '') {
        alert("ingresa la contraseña administrador");
        $("#pwd_1").focus();
        return false;
    }
    if (pwd_2 == '') {
        alert("ingresa la confirmacion de contraseña");
        $("#pwd_1").focus();
        return false;
    }
    if (pwd_1 != pwd_2) {
        alert("las contraseñas no son iguales");
        $("#pwd_1").focus();
        return false;
    }
    $.ajax({
        async: true,
        type: "POST",
        url: "/save",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGclientesPSWADM\":{\"pwd_1\":\"" + pwd_1 +
            "\",\"pwd_2\":\"" + pwd_2 +
            "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
            alert('datos guardados correctamente');
        },
        error: function (jqXHR, exception) {
            alert('datos NO guardados');
            return false;
        }
    });
    return false;
}



let jsonCliente = {};
/******************************************************************************
function BuscarCliente()
    Busca cliente en la memoria SDCard y lo muestra sin EDICION
    Envia el password capturado por el usuario a la URL /clientes

  Se valida en la funcion InitServerU(void) del archivo MServer.cpp
    server.on("/clientes", HTTP_POST, [](AsyncWebServerRequest *request)

   entrada: -----
   salida : si. Password correcto y habilita las funciones de la pestaña CONFIGURACION
******************************************************************************/
function BuscarCliente() {
    let search_1 = $("#search_1").val();
    if (search_1 == '') {
        alert("ingresa el cliente");
        $("#search_1").focus();
        return false;
    }
    $.ajax({
        async: true,
        type: "POST",
        url: "/clientes",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"ClientesSUP\":{\"cliente\":\"" + search_1 +
            "\"}}\0",
        contentType: "application/json",
        success: function (d) {
            if (d) {
                jsonCliente = d;
                codificarCliente();
            } else {
                $("#div_supervisor").html("");
                alert('El cliente no existe');
            }
        },
        error: function (jqXHR, exception) {
            $("#div_supervisor").html("");
            alert('El cliente no existe');
            return false;
        }
    });
    return false;
}

/******************************************************************************
function BuscarClienteADM()
    Busca cliente en la memoria SDCard y lo muestra con EDICION
    Envia el password capturado por el usuario a la URL /clientes

  Se valida en la funcion InitServerU(void) del archivo MServer.cpp
    server.on("/clientes", HTTP_POST, [](AsyncWebServerRequest *request)

   entrada: -----
   salida : si. Password correcto y habilita las funciones de la pestaña CONFIGURACION
******************************************************************************/
function BuscarClienteADM() {
    let search_1 = $("#search_1").val();
    if (search_1 == '') {
        alert("ingresa el cliente");
        $("#search_1").focus();
        return false;
    }
    $.ajax({
        async: true,
        type: "POST",
        url: "/clientes",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"ClientesADM\":{\"cliente\":\"" + search_1 +
            "\"}}\0",
        contentType: "application/json",
        success: function (d) {
            if (d) {
                jsonCliente = d;
                codificarClienteADM();
            } else {
                $("#div_admin").html("");
                alert('El cliente no existe');
            }
        },
        error: function (jqXHR, exception) {
            $("#div_admin").html("");
            alert('El cliente no existe');
            return false;
        }
    });
    return false;
}





function codificarCliente() {
    let html = '<ul class="list-group">';
    $.each(jsonCliente, function (key, value) {
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                `+ key + `
                <span class="badge badge-primary badge-pill">`+ value + `</span>
            </li>
        `;
        //alert(key + ": " + value);
    });
    html += '</ul>';
    $("#div_supervisor").html(html);
}






function codificarClienteADM() {
    let html = '<div class="jumbotron"><form id="form_cliente_admin">';
    $.each(jsonCliente, function (key, value) {
        html += `
            <div class="form-group">
                <label for="`+ key + `">` + key + `</label>
                <input type="text" class="form-control" id="`+ key + `" name="` + key + `" placeholder="` + key + `" value="` + value + `" />
            </div>
        `;
        //alert(key + ": " + value);
    });
    html += `
    <div class="form-group">
      <button id="btn_d" type="button" class="btn btn-primary btn-lg" onclick="editarClienteAdmin()">Editar</button>
    </div>    
    `;
    html += '</form></div>';
    $("#div_admin").html(html);
}

/******************************************************************************
function editarClienteAdmin()
    Envia los datos editados del cliente en CLIENTES->ADMINISTRADOR->EDITAR
    Envia el password capturado por el usuario a la URL /clientesEditar

  Se valida en la funcion InitServerU(void) del archivo MServer.cpp
    server.on("/clientesEditar", HTTP_POST, [](AsyncWebServerRequest *request)

   entrada: -----
   salida : -----
******************************************************************************/
function editarClienteAdmin() {
    let jsonData = $("#form_cliente_admin").serializeToJSON({
        // serialize the form using the Associative Arrays
        associativeArrays: true,
        // convert "true" and "false" to booleans true / false
        parseBooleans: true,
        parseFloat: {
            // the value can be a string or function
            condition: undefined,
            // auto detect NaN value and changes the value to zero
            nanToZero: true,
            // return the input value without commas
            getInputValue: function ($input) {
                return $input.val().split(",").join("");
            }
        }
    });

    let jsonDataParse = JSON.stringify(jsonData);
    console.log(jsonData);
    console.log(jsonDataParse);
    $.ajax({
        async: true,
        type: "POST",
        url: "/clientesEditar",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGclientesEditar\": " + jsonDataParse + "}\0",
        contentType: "application/json",
        success: function (d) {
            console.log(d);
            if (d.indexOf('si') >= 0) {
                $("#div_admin").html("");
                $("#search_1").val("");
                alert('El cliente se edito correctamente');
            } else {
                $("#div_admin").html("");
                $("#search_1").val("");
                alert('Ocurrio un error al editar el cliente');
            }
        },
        error: function (jqXHR, exception) {
            $("#div_admin").html("");
            $("#search_1").val("");
            alert('Ocurrio un error al editar el cliente');
        }
    });
    return false;
}

/******************************************************************************
function createClienteNuevoVehiculo()

   entrada: -----
   salida : -----
******************************************************************************/
function createClienteNuevoVehiculo() {
    createClienteNuevo("VEHICULO");
}

/******************************************************************************
function createClienteNuevoPersona()

   entrada: -----
   salida : -----
******************************************************************************/
function createClienteNuevoPersona() {
    createClienteNuevo("PERSONA");
}

/******************************************************************************
function createClienteNuevo(type)

   entrada: -----
   salida : -----
******************************************************************************/
function createClienteNuevo(type) {
    $.ajax({
        async: true,
        type: "POST",
        url: "/clientes",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGclientesADMNUEVO\":{\"type\":\"" + type + "\"}}\0",
        contentType: "application/json",
        success: function (d) {
            if (d) {
                jsonCliente = d;
                codificarClienteNuevoADM();
            } else {
                $("#div_admin").html("");
            }
        },
        error: function (jqXHR, exception) {
            $("#div_admin").html("");
            return false;
        }
    });
    return false;
}


function codificarClienteNuevoADM() {
    let html = '<div class="jumbotron"><form id="form_cliente_admin">';
    $.each(jsonCliente, function (key, value) {
        html += `
            <div class="form-group">
                <label for="`+ key + `">` + key + `</label>
                <input type="text" class="form-control" id="`+ key + `" name="` + key + `" placeholder="` + key + `" value="` + value + `" />
            </div>
        `;
        //alert(key + ": " + value);
    });
    html += `
    <div class="form-group">
      <button id="btn_d" type="button" class="btn btn-primary btn-lg" onclick="nuevoClienteAdmin()">Nuevo</button>
    </div>    
    `;
    html += '</form></div>';
    $("#div_admin").html(html);
}




function nuevoClienteAdmin() {

    let jsonData = $("#form_cliente_admin").serializeToJSON({

        // serialize the form using the Associative Arrays
        associativeArrays: true,

        // convert "true" and "false" to booleans true / false
        parseBooleans: true,
        parseFloat: {

            // the value can be a string or function
            condition: undefined,

            // auto detect NaN value and changes the value to zero
            nanToZero: true,

            // return the input value without commas
            getInputValue: function ($input) {
                return $input.val().split(",").join("");
            }
        }

    });

    let jsonDataParse = JSON.stringify(jsonData);
    console.log(jsonData);
    console.log(jsonDataParse);
    $.ajax({
        async: true,
        type: "POST",
        url: "/clientesEditar",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGclientesEditar\": " + jsonDataParse + "}\0",
        contentType: "application/json",
        success: function (d) {
            console.log(d);
            if (d.indexOf('si') >= 0) {
                $("#div_admin").html("");
                $("#search_1").val("");
                alert('El cliente se creo correctamente');
            } else {
                $("#div_admin").html("");
                $("#search_1").val("");
                alert('Ocurrio un error al crear el cliente');
            }
        },
        error: function (jqXHR, exception) {
            $("#div_admin").html("");
            $("#search_1").val("");
            alert('Ocurrio un error al crear el cliente');
        }
    });
    return false;
}
// ********* FIN ACCIONES DE LA PAGINA CONFIGURACION --> XXX ********* //

// *********  ACCIONES DE LA PAGINA  CONFIGURACION --> XXX   ********* //
