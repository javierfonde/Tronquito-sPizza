window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    const boton = document.getElementById("envioDato");
    boton.onclick = validarFormulario;
    // Una vez captura que boton debe leer, cuando se haga click este llama a la funcion ValidarFormulario.
}

function validarFormulario()
{
    const nombre = document.getElementById("getNombre");
    if(nombre.value=='')
    {
      alert("Ingrese nombre");
      return;
    }
    const telefono = document.getElementById("getTelefono");
    const correo = document.getElementById("getCorreo");
    if(telefono.value=='' && correo.value=='' )
    {
      alert("Ingrese algún medio de contacto");
      return;
    }

    const mensaje=document.getElementById("getMensaje");
    if(mensaje.value=='')
    {
      alert("Ingrese mensaje");
      return;
    }
    

    alert("Gracias por su ayuda!");
}