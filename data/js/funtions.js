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
}

function getInit() {
  let url = window.location.hash;
  $(".linkActivo").removeClass("active");
  if (url == "/" || url == "" || url.indexOf("inicio") >= 0) {
    addActive("inicio");
    Home();
  }

  if (url.indexOf("configuracion") >= 0) {
    addActive("configuracion");
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

function Home() {
  loadFile("../views/home.html", ".contenedor");
  loadFile("../views/home/network.html", "#NETWORK");
  loadFile("../views/home/configs.html", "#configs");
  codigoAInyectar();
}

function Configuracion() {
  loadFile("../views/configuracion.html", ".contenedor");
  loadFile("../views/configuracion/network.html", "#NETWORK");
  loadFile("../views/configuracion/prt.html", "#PRT");
  loadFile("../views/configuracion/evo.html", "#EVO");
  loadFile("../views/configuracion/seguridad.html", "#SEGURIDAD");
  codigoAInyectar();
}

function Network() {
  loadFile("../views/network.html", ".contenedor");
  codigoAInyectar();
}

function Evogas() {
  loadFile("../views/evogas.html", ".contenedor");
  codigoAInyectar();
}

function Monitoreo() {
  loadFile("../views/monitoreo.html", ".contenedor");
  codigoAInyectar();
}

function Seguridad() {
  loadFile("../views/seguridad.html", ".contenedor");
  codigoAInyectar();
}

function Firmware() {
  loadFile("../views/firmware.html", ".contenedor");
  codigoAInyectar();
}

function Reboot() {
  loadFile("../views/reboot.html", ".contenedor");
  codigoAInyectar();
}

$(window).bind("hashchange", function () {
  getInit();
});

$(document).ready(function () {
  initLayouts();
});
