window.onload = paginaCargada;

function paginaCargada() {
    const persiana = document.getElementById("desplegable");
    const persianaButton = document.getElementById("interruptor");
    const botonContacto = document.getElementById("envioDato");
    console.log("Declaraciones")

    persianaButton.addEventListener("click",(event)=>{accionarPersiana(persiana, event)})
    console.log("persianas")
    // Evento que captura el envio del formulario
    botonContacto.onclick = validarFormulario;
    // Una vez captura que botonContacto debe leer, cuando se haga click este llama a la funcion ValidarFormulario.
}

function validarFormulario() {
    const nombre = document.getElementById("getNombre");
    if (nombre.value == '') {
        alert("Ingrese nombre");
        return;
    }
    const telefono = document.getElementById("getTelefono");
    const correo = document.getElementById("getCorreo");
    if (telefono.value == '' && correo.value == '') {
        alert("Ingrese algún medio de contacto");
        return;
    }

    const mensaje = document.getElementById("getMensaje");
    if (mensaje.value == '') {
        alert("Ingrese mensaje");
        return;
    }


    alert("Gracias por su ayuda!");
}

function accionarPersiana(persiana, event) {
    const buttonClass=event.target.classList;
  
    console.log("Click", buttonClass.contains("closed"))
    if (buttonClass.contains("closed")){
        buttonClass.remove("closed");
        desplegarPersiana(persiana);
    } else {
        retraerPersiana(persiana);
        buttonClass.add("closed");
    }
}

function desplegarPersiana(persiana) {
    console.log("Click1")
    console.log("ENTRAMOS", persiana)
    persiana.style.top = "+100%";
    persiana.focus();
}

function retraerPersiana(persiana) {
    console.log("Click2")
    persiana.style.top = "-200%";
}