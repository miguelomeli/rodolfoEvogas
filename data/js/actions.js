



function liberarPRT() {
    let _b_1 = $("#b_1").val();
    if (_b_1 == 'HABILITADA') {
        $("#b_5").val('HABILITADA');
        $("#b_b_1").show();
        $("#b_b_2").show();
        $("#b_b_3").show();
        // $("#b_2").val('');
        // $("#b_3").val('');
        // $("#b_4").val('');
    } else {
        $("#b_5").val('DESHABILITADA');
        $("#b_b_1").hide();
        $("#b_b_2").hide();
        $("#b_b_3").hide();
    }
}




function getPRT() {
    let _b_5 = $("#b_5").val();
    $("#b_1").val(_b_5);
    liberarPRT();
}


















function getNetwork() {
    let _a_1 = $("#a_1").val();
    $("#aaa_1").val(_a_1);
    liberarRed();
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

function saveNetwork() {
    let _a_1 = $("#a_1").val();
    let _a_2 = $("#a_2").val();
    let _a_3 = $("#a_3").val();
    let _a_4 = $("#a_4").val();
    let _a_5 = $("#a_5").val();
    let _a_6 = $("#a_6").val();
    let _a_7 = $("#a_7").val();
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
    /*
        if (_a_7 == '') {
            alert("ingresa URL");
            $("#a_7").focus();
            return false;
        }
    */
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

    /*
            async: true,
            dataType: "json",
            type: "POST",
            url: "./",
            data: {
                key: 'Network',
                a_1: _a_1,
                a_2: _a_2,
                a_3: _a_3,
                a_4: _a_4,
                a_5: _a_5,
                a_6: _a_6,
                a_7: _a_7,
            },
            global: true,
            ifModified: false,
            processData: true,
            contentType: "application/x-www-form-urlencoded",
            success: function (datos) {
                alert('datos guardados correctamente');
                $("#btn_a").show();
                $("#cnt_a").hide();
            },
            error: function (jqXHR, exception) {
                $("#btn_a").show();
                $("#cnt_a").hide();
                return false;
            }
        });
        return false;
    */
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

        /*
                dataType: "json",
                data: {
                    key: 'PRT',
                    a_1: _b_1,
                    a_2: _b_2,
                    a_3: _b_3,
                },
                contentType: "application/x-www-form-urlencoded",
        */
        //        data: JSON.stringify("{\"a_1\":\"hola\",\"b_1\":\"mundo\"}"),
        //        data: "{\"a_1\":\"hola\",\"b_1\":\"mundo\"}",
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
        alert("ingresa CONTRASEÑA PAGINA");
        $("#d_5").focus();
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
            "\",\"clavePagina\":\"" + _d_5 +
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