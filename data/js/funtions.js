function loadFile(file, from) {
  fetch(file)
    .then(response => {
      return response.text();
    })

    .then(data => {
      $(from).html(data);
      codigoAInyectar();
    });
}

function initLayouts() {
  loadFile("../header.html", "header");
  loadFile("../footer.html", ".footer");
  getInit();
  //codigoAInyectar();
  //  getStatus();
}

function getInit() {
  let url = window.location.hash;
  $(".linkActivo").removeClass("active");
  if (url == "/" || url == "" || url.indexOf("inicio") >= 0) {
    addActive("inicio");
    Home();
  }

  if (url.indexOf("config") >= 0) {
    addActive("config");
    Configuracion();
  }
  if (url.indexOf("network") >= 0) {
    addActive("network");
    Network();
  }

  if (url.indexOf("evogas") >= 0) {
    addActive("evogas");
    Evogas();
  }
  if (url.indexOf("clientes") >= 0) {
    addActive("clientes");
    Monitoreo();
  }
  if (url.indexOf("seguridad") >= 0) {
    addActive("seguridad");
    Seguridad();
  }
  if (url.indexOf("firmware") >= 0) {
    addActive("firmware");
    Firmware();
  }
  if (url.indexOf("reboot") >= 0) {
    addActive("reboot");
    Reboot();
  }

  if (url.indexOf("supervisor") >= 0) {
    addActive("clientes");
    Supervisor();
  }
  if (url.indexOf("administrador") >= 0) {
    addActive("clientes");
    Administrador();
  }





}

function addActive(key) {
  setTimeout(() => {
    $("#" + key).addClass("active");
  }, 120);
}


function cerrarSessionSupervisor() {
  let _c_ = confirm("Desea cerrar la session de supervisor ?");
  if (_c_) {
    localStorage.removeItem("token_clientes_supervisor");
    window.location.href = "/#/clientes";
  }
  return false;
}


function cerrarSessionAdministrador() {
  let _c_ = confirm("Desea cerrar la session de administrador ?");
  if (_c_) {
    localStorage.removeItem("token_clientes_administrador");
    window.location.href = "/#/clientes";
  }
  return false;
}





function CerrarSession() {
  let _c_ = confirm("Desea cerrar la session ?");
  if (_c_) {
    localStorage.removeItem("token");
    localStorage.removeItem("token_clientes");
    localStorage.removeItem("token_clientes_supervisor");
    localStorage.removeItem("token_clientes_administrador");
    $("#loginSession").hide();
    checkLoginBtn();
    window.location.href = "/#/inicio";
  }
  return false;
}


function checkToken() {
  let ls = localStorage.getItem("token");
  if (ls !== "undefined" && ls !== null) {
    return true;
  } else {
    return false;
  }
}

function checkTokenClientes() {
  let ls = localStorage.getItem("token_clientes");
  if (ls !== "undefined" && ls !== null) {
    return true;
  } else {
    return false;
  }
}

function checkTokenClientesSupervisor() {
  let ls = localStorage.getItem("token_clientes_supervisor");
  if (ls !== "undefined" && ls !== null) {
    return true;
  } else {
    return false;
  }
}


function checkTokenClientesAdministrador() {
  let ls = localStorage.getItem("token_clientes_administrador");
  if (ls !== "undefined" && ls !== null) {
    return true;
  } else {
    return false;
  }
}



let cT = false;
let cTC = false;
let cTCT = false;
let cTCTtype = null;

let cTCS = false;
let cTCA = false;





function checkTokenView() {
  let t = checkToken();
  if (t == true) {
    cT = true;
    return true;
  } else {
    let __c__ = prompt("Ingresa el password");
    if (__c__ == null || __c__ == "") {
      alert("Error no ingresaste un password");
      return false;
    } else {
      $.ajax({
        async: false,
        type: "POST",
        url: "/checkPassword",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGpassword\":{\"password\":\"" + __c__ + "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
          console.log(datos);
          if (datos.indexOf('si') >= 0) {
            cT = true;
            localStorage.setItem("token", "token");
            return true;
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("token_clientes");
            localStorage.removeItem("token_clientes_supervisor");
            localStorage.removeItem("token_clientes_administrador");

            alert("El password esta mal"); // si aparece este mensaje es que no estas regresando bien el texto
            window.location.href = "/#/inicio";
            cT = false;
            return false;
          }
        },
        error: function (jqXHR, exception) {
          localStorage.removeItem("token");
          localStorage.removeItem("token_clientes");
          localStorage.removeItem("token_clientes_supervisor");
          localStorage.removeItem("token_clientes_administrador");
          alert("El password es erroneo");
          window.location.href = "/#/inicio";
          cT = false;
          return false;
        }
      });
    }
  }
}



function checkTokenClientesView() {
  let t = checkTokenClientes();
  if (t == true) {
    cTC = true;
    return true;
  } else {
    let __c__ = prompt("Ingresa el password");
    if (__c__ == null || __c__ == "") {
      alert("Error no ingresaste un password");
      return false;
    } else {
      $.ajax({
        async: false,
        type: "POST",
        url: "/checkPasswordClientes",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGpassword\":{\"passwordCliente\":\"" + __c__ + "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
          console.log(datos);
          if (datos.indexOf('si') >= 0) {
            cTC = true;
            localStorage.setItem("token_clientes", "token_clientes");
            return true;
          } else {
            localStorage.removeItem("token_clientes");
            alert("El password esta mal"); // si aparece este mensaje es que no estas regresando bien el texto
            window.location.href = "/#/inicio";
            cTC = false;
            return false;
          }
        },
        error: function (jqXHR, exception) {
          localStorage.removeItem("token_clientes");
          alert("El password es erroneo");
          window.location.href = "/#/inicio";
          cTC = false;
          return false;
        }
      });
    }
  }
}




function checkTokenClientesSuperisorView() {
  let t = checkTokenClientesSupervisor();
  if (t == true) {
    cTCS = true;
    return true;
  } else {
    let __c__ = prompt("Ingresa el password del supervisor");
    if (__c__ == null || __c__ == "") {
      alert("Error no ingresaste un password");
      return false;
    } else {
      $.ajax({
        async: false,
        type: "POST",
        url: "/checkPasswordClientesSupervisor",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGpassword\":{\"passwordClienteSupervisor\":\"" + __c__ + "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
          console.log(datos);
          if (datos.indexOf('si') >= 0) {
            cTCS = true;
            localStorage.setItem("token_clientes_supervisor", "token_clientes_supervisor");
            window.location.href = "/#/supervisor";
            return true;
          } else {
            localStorage.removeItem("token_clientes_supervisor");
            alert("El password esta mal"); // si aparece este mensaje es que no estas regresando bien el texto
            window.location.href = "/#/clientes";
            cTCS = false;
            return false;
          }
        },
        error: function (jqXHR, exception) {
          localStorage.removeItem("token_clientes_supervisor");
          alert("El password es erroneo");
          window.location.href = "/#/clientes";
          cTCS = false;
          return false;
        }
      });
    }
  }
}


function checkTokenClientesAdministradorView() {
  let t = checkTokenClientesAdministrador();
  if (t == true) {
    cTCA = true;
    return true;
  } else {
    let __c__ = prompt("Ingresa el password del administrador");
    if (__c__ == null || __c__ == "") {
      alert("Error no ingresaste un password");
      return false;
    } else {
      $.ajax({
        async: false,
        type: "POST",
        url: "/checkPasswordClientesSupervisor",
        global: true,
        ifModified: false,
        processData: true,
        data: "{\"CFGpassword\":{\"passwordClienteAdministrador\":\"" + __c__ + "\"}}\0",
        contentType: "application/json",
        success: function (datos) {
          console.log(datos);
          if (datos.indexOf('si') >= 0) {
            cTCA = true;
            localStorage.setItem("token_clientes_administrador", "token_clientes_administrador");
            window.location.href = "/#/administrador";
            return true;
          } else {
            localStorage.removeItem("token_clientes_administrador");
            alert("El password esta mal"); // si aparece este mensaje es que no estas regresando bien el texto
            window.location.href = "/#/clientes";
            cTCA = false;
            return false;
          }
        },
        error: function (jqXHR, exception) {
          localStorage.removeItem("token_clientes_administrador");
          alert("El password es erroneo");
          window.location.href = "/#/clientes";
          cTCA = false;
          return false;
        }
      });
    }
  }
}





// FUNCIONES DE ATENCION A LAS PAGINAS WEB
function Home() {
  loadFile("../views/home.html", ".contenedor");
  loadFile("../views/home/network.html", "#NETWORK");
  loadFile("../views/home/configs.html", "#configs");
  //codigoAInyectar();
}












function Configuracion() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/configuracion.html", ".contenedor");
  loadFile("../views/config/network.html", "#NETWORK");
  loadFile("../views/config/prt.html", "#PRT");
  loadFile("../views/config/evo.html", "#EVO");
  loadFile("../views/config/seguridad.html", "#SEGURIDAD");
  //codigoAInyectar();
}

function Network() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/network.html", ".contenedor");
  //codigoAInyectar();
}

function Evogas() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/evogas.html", ".contenedor");
  //codigoAInyectar();
}

function Monitoreo() {
  let t = checkTokenClientesView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/monitoreo.html", ".contenedor");
  //  codigoAInyectar();
}


function Supervisor() {
  let t = checkTokenClientesSuperisorView();
  if (t == false) {
    window.location.href = "/#/clientes";
    return false;
  }
  loadFile("../views/supervisor.html", ".contenedor");
}

function Administrador() {
  let t = checkTokenClientesAdministradorView();
  if (t == false) {
    window.location.href = "/#/clientes";
    return false;
  }
  loadFile("../views/administrador.html", ".contenedor");
}






function Seguridad() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/seguridad.html", ".contenedor");
  //  codigoAInyectar();
}

function Firmware() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/firmware.html", ".contenedor");
  //  codigoAInyectar();
}

function Reboot() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/reboot.html", ".contenedor");
  //  codigoAInyectar();
}


function checkLoginBtn() {
  if (checkToken() == true) {
    $("#loginSession").show();
    setTimeout(() => { checkLoginBtn(); }, 300);
    //return false;
  } else {
    $("#loginSession").hide();
    setTimeout(() => { checkLoginBtn(); }, 300);
  }
}



$(window).bind("hashchange", function () {
  getInit();
});

$(document).ready(function () {
  initLayouts();
  checkLoginBtn();
});


