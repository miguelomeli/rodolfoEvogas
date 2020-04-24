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
}

function addActive(key) {
  setTimeout(() => {
    $("#" + key).addClass("active");
  }, 120);
}



function CerrarSession() {
  let _c_ = confirm('Desea cerrar la session?');
  if (_c_) {
    localStorage.removeItem('token');
    $("#loginSession").hide();
    checkLoginBtn();
    window.location.href = "/#/inicio";
  }
  return false;
}


function checkToken() {
  let ls = localStorage.getItem('token');
  if (ls !== 'undefined' && ls !== null) {
    return true;
  } else {
    return false;
  }
}



let cT = false;


function checkTokenView() {
  let t = checkToken();
  if (t == true) {
    cT = true;
    return true;
  } else {
    let __c__ = prompt('Ingresa el password');
    if (__c__ == null || __c__ == "") {
      alert('Error no ingresaste un password');
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
            return true;
          } else {
            alert('El password esta mal'); // si aparece este mensaje es que no estas regresando bien el texto
            window.location.href = "/#/inicio";
            cT = false;
            return false;
          }
        },
        error: function (jqXHR, exception) {
          alert('El password es erronero');
          window.location.href = "/#/inicio";
          cT = false;
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
  //  codigoAInyectar();
}

function Configuracion() {
  let t = checkTokenView();
  if (cT == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/config.html", ".contenedor");
  loadFile("../views/config/network.html", "#NETWORK");
  loadFile("../views/config/prt.html", "#PRT");
  loadFile("../views/config/evo.html", "#EVO");
  loadFile("../views/config/seguridad.html", "#SEGURIDAD");
  //  codigoAInyectar();
}

function Network() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/network.html", ".contenedor");
  //  codigoAInyectar();
}

function Evogas() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/evogas.html", ".contenedor");
  //  codigoAInyectar();
}

function Monitoreo() {
  let t = checkTokenView();
  if (t == false) {
    window.location.href = "/#/inicio";
    return false;
  }
  loadFile("../views/monitoreo.html", ".contenedor");
  //  codigoAInyectar();
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


