window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    var boton = document.getElementById("envioDato");
    boton.onclick = validarFormulario;
    // Una vez captura que boton debe leer, cuando se haga click este llama a la funcion ValidarFormulario.
}

function validarFormulario()
{
    var nombre = document.getElementById("getNombre");
    if(nombre.value=='')
    {
      alert("Ingrese nombre");
      return;
    }
    var telefono = document.getElementById("getTelefono");
    var correo = document.getElementById("getCorreo");
    if(telefono.value=='' && correo.value=='' )
    {
      alert("Ingrese algu n medio de contacto");
      return;
    }

    var mensaje=document.getElementById("getMensaje");
    if(mensaje.length == 0)
    {
      alert("Ingrese mensaje");
      return;
    }
}