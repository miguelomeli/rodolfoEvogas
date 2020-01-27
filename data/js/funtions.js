function loadFile(file, from) {
    fetch(file)
        .then(response => {
            return response.text()
        })
        .then(data => {
            $(from).html(data);
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
    if (url == '/' || url == '' || url.indexOf('inicio') >= 0) {
        addActive('inicio');
        Home();
    }
    if (url.indexOf('network') >= 0) {
        addActive('network');
        Network();
    }
    if (url.indexOf('evogas') >= 0) {
        addActive('evogas');
        Evogas();
    }
    if (url.indexOf('monitoreo') >= 0) {
        addActive('monitoreo');
        Monitoreo();
    }
    if (url.indexOf('seguridad') >= 0) {
        addActive('seguridad');
        Seguridad();
    }
    if (url.indexOf('firmware') >= 0) {
        addActive('firmware');
        Firmware();
    }
    if (url.indexOf('reboot') >= 0) {
        addActive('reboot');
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
    loadFile("../views/home/impresora.html", "#IMPRESORA");
    loadFile("../views/home/evogas.html", "#EVoGAS");
    loadFile("../views/home/redes.html", "#REDES");
    loadFile("../views/home/grafica.html", "#GRAFICA");
}

function Network() {
    loadFile("../views/network.html", ".contenedor");
}

function Evogas() {
    loadFile("../views/evogas.html", ".contenedor");
}

function Monitoreo() {
    loadFile("../views/monitoreo.html", ".contenedor");
}

function Seguridad() {
    loadFile("../views/seguridad.html", ".contenedor");
}

function Firmware() {
    loadFile("../views/firmware.html", ".contenedor");
}

function Reboot() {
    loadFile("../views/reboot.html", ".contenedor");
}


$(window).bind('hashchange', function() {
    getInit();
});




$(document).ready(function() {
    initLayouts();
});