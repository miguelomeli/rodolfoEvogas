


function liberarRed() {
    let _a_1 = $("#a_1").val();
    if (_a_1 == 'DHCP') {
        $("#d_a_2").hide().val('');
        $("#d_a_3").hide().val('');
        $("#d_a_4").hide().val('');
    } else {
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
    //Action
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
    //Action
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

    //Action
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


    //Action
}