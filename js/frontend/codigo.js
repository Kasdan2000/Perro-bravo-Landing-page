let botonDeAperturaDeForm = document.querySelector("h1 + div");
let nombreDelCliente = document.querySelector("#nombreDelCliente");
let tipoDeEmpresa = document.querySelector("#tipoDeEmpresa");
let rolDelCliente = document.querySelector("#rolDelCliente"); 
let procedencia = document.querySelector("#procedencia");
let rubro = document.querySelector("#rubro");
let nroTelefono = document.querySelector("#nroTelefono");
let email = document.querySelector("#email");
let presupuesto = document.querySelector("#presupuesto");
let descripcion = document.querySelector("#descripcion");
let fechaDeComienzo = document.querySelector("#fechaDeComienzo");
let fechaDeFinalización = document.querySelector("#fechaDeFinalizacion");
let btnEnviar = document.querySelector("#btnEnviar");
let menuHum = document.querySelector("#menuHum");
let menuHum2 = document.querySelector("#menuHum2");
let claseMenuHum = document.querySelector(".menuHum");
let menuDesplegable = document.querySelector("#menuDesplegable");
let accesoSeccionAcerca = document.querySelector("#abrirAcerca");
let accesoSeccionContacto = document.querySelector("#abrirContacto");
let body = document.querySelector('body');
let favicon = document.querySelector('link[rel="shortcut icon"]')

cargarSeelectPresupuestos();

let arrayFondos = ['salmon', 'mango', 'azul', 'verdeLima']

function modificarFondos() {
    var randomFondo = arrayFondos[Math.floor(Math.random() * arrayFondos.length)];
    document.querySelector('body').className = randomFondo;
}

modificarFondos();

function cambiarFavicon(){
    if(body.className === 'salmon'){
        favicon.href = 'img/logo-mango.ico'
    }

    if(body.className === 'mango'){
        favicon.href = 'img/logo-coral.ico'
    }

    if(body.className === 'azul'){
        favicon.href = 'img/logo-azul.ico'
    }

    if(body.className === 'verdeLima'){
        favicon.href = 'img/logo-lima.ico'
    }
    
}

cambiarFavicon();

function cargarSeelectPresupuestos() {
    for(let i = 0; i <= presupuestos.length - 1; i++) {
        presupuesto.innerHTML += `<option value="${presupuestos[i]}"
        >${presupuestos[i]}</option>`

    }
}


menuHum.addEventListener("click", abrirMenuHum);
menuHum2.addEventListener("click", abrirMenuHum);

function abrirMenuHum(){
    const visibility = menuDesplegable.getAttribute("data-visible");
    if(visibility === "false"){
        menuDesplegable.setAttribute("data-visible", true);
    }else if(visibility === "true"){
        menuDesplegable.setAttribute("data-visible", false);
    }
}


accesoSeccionAcerca.addEventListener("click", abrirSeccionAcerca);

function abrirSeccionAcerca() {
    const visibility = menuDesplegable.getAttribute("data-visible");
    if(visibility === "true"){
        menuDesplegable.setAttribute("data-visible", false);
        document.querySelector("#seccionAcerca").style.display = "block";
        document.querySelector("h1").style.display = "none";
        document.querySelector("h1 + div").style.display = "none";
        document.querySelector("#formularioDeProyecto").style.display = "none";
    }
    else{
        document.querySelector("#seccionAcerca").style.display = "block";
        document.querySelector("h1").style.display = "none";
        document.querySelector("h1 + div").style.display = "none";
        document.querySelector("#formularioDeProyecto").style.display = "none";
    }
}


botonDeAperturaDeForm.addEventListener("click", abrirSectionContacto);
accesoSeccionContacto.addEventListener("click", abrirSectionContacto);

function abrirSectionContacto(){
    const visibility = menuDesplegable.getAttribute("data-visible");
  /*   let h1 = document.querySelector("h1");
    let sectionAcerca = document.querySelector("#seccionAcerca");
    let form = document.querySelector("#formularioDeProyecto"); */
    let vw = window.innerWidth;
    if(vw <= 767){
        if(visibility === "true"){
            menuDesplegable.setAttribute("data-visible", false);
            document.querySelector("#seccionAcerca").style.display = "none";
            document.querySelector("h1").style.display = "block";
            document.querySelector("h1 + div").style.display = "block";
            document.querySelector("#formularioDeProyecto").style.display = "block";    
        }
         else{
            document.querySelector("#seccionAcerca").style.display = "none";
            document.querySelector("h1").style.display = "block";
            document.querySelector("h1 + div").style.display = "block";
            document.querySelector("#formularioDeProyecto").style.display = "block";
         } 
    }
    if(vw >= 768){
        if(visibility === "true"){
            menuDesplegable.setAttribute("data-visible", false);
            document.querySelector("#seccionAcerca").style.display = "none";
            document.querySelector("h1").style.display = "block";
            document.querySelector("h1 + div").style.display = "block";
            document.querySelector("#formularioDeProyecto").style.display = "grid";    
        }
        else{
            document.querySelector("#seccionAcerca").style.display = "none";
            document.querySelector("h1").style.display = "block";
            document.querySelector("h1 + div").style.display = "block";
            document.querySelector("#formularioDeProyecto").style.display = "grid";
        }
    }
}


