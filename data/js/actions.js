


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
    if (_a_7 == '') {
        alert("ingresa URL");
        $("#a_7").focus();
        return false;
    }
    $("#btn_a").hide();
    $("#cnt_a").show();
    $.ajax({
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
}



function savePRT() {
    let _b_1 = $("#b_1").val();
    let _b_2 = $("#b_2").val();
    let _b_3 = $("#b_3").val();
    if (_b_1 == '') {
        alert("ingresa ip impresora");
        $("#b_1").focus();
        return false;
    }
    if (_b_2 == '') {
        alert("ingresa id impresora");
        $("#b_2").focus();
        return false;
    }
    if (_b_3 == '') {
        alert("ingresa puerto impresora");
        $("#b_3").focus();
        return false;
    }
    $("#btn_b").hide();
    $("#cnt_b").show();
    $.ajax({
        async: true,
        dataType: "json",
        type: "POST",
        url: "./",
        data: {
            key: 'PRT',
            a_1: _b_1,
            a_2: _b_2,
            a_3: _b_3,
        },
        global: true,
        ifModified: false,
        processData: true,
        contentType: "application/x-www-form-urlencoded",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_b").show();
            $("#cnt_b").hide();
        },
        error: function (jqXHR, exception) {
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
    $("#btn_c").hide();
    $("#cnt_c").show();
    $.ajax({
        async: true,
        dataType: "json",
        type: "POST",
        url: "./",
        data: {
            key: 'EVO',
            a_1: _c_1,
            a_2: _c_2,
            a_3: _c_3,
            a_3: _c_3,
        },
        global: true,
        ifModified: false,
        processData: true,
        contentType: "application/x-www-form-urlencoded",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_c").show();
            $("#cnt_c").hide();
        },
        error: function (jqXHR, exception) {
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
    if (_d_1 == '') {
        alert("ingresa USUARIO DE ENTRADA");
        $("#d_1").focus();
        return false;
    }
    if (_d_2 == '') {
        alert("ingresa CONTRASEÑA DE ENTRADA");
        $("#d_2").focus();
        return false;
    }
    $("#btn_d").hide();
    $("#cnt_d").show();
    $.ajax({
        async: true,
        dataType: "json",
        type: "POST",
        url: "./",
        data: {
            key: 'Seguridad',
            a_1: _d_1,
            a_2: _d_2,
        },
        global: true,
        ifModified: false,
        processData: true,
        contentType: "application/x-www-form-urlencoded",
        success: function (datos) {
            alert('datos guardados correctamente');
            $("#btn_d").show();
            $("#cnt_d").hide();
        },
        error: function (jqXHR, exception) {
            $("#btn_d").show();
            $("#cnt_d").hide();
            return false;
        }
    });
    return false;
}