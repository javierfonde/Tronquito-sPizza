window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    var boton = document.getElementById("envioDato");
    boton.onclick = validarFormulario;
    // Una vez capputa que boton debe leer, cuando se haga click este llama a la funcion ValidarFormulario.
}

function validarFormulario()
{
    var nombre = document.getElementById("getNombre");
    if(nombre.length == 0)
    {
      alert("Ingrese nombre");
      return;
    }
    var telefono = document.getElementById("getTelefono");
    var correo = document.getElementById("getCorreo");
    if(telefono.length == 0 || correo.length==0 )
    {
      alert("Ingrese medio de contacto");
      return;
    }

    var mensaje=document.getElementById("getMensaje");
    if(mensaje.length == 0)
    {
      alert("Ingrese mensaje");
      return;
    }
    var formulario = document.getElementById("respuesta");
    formulario.submit();
}