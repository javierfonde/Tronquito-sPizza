window.onload = paginaCargada;

function paginaCargada()
{
  
  // Evento que captura el envio del formulario
  const form= document.querySelector(".formularioContainer");
  form.addEventListener("submit", validarFormulario, true); 
  // Una vez que hago submit, valida por html que los campos que pido esten completos y correctos si es asi
  // la accion submit finaliza dando entrada al evento en el addEventListener, luego llama a la funcion ValidarFormulario.
}

function validarFormulario()
{ 
    
    console.log("HOLA")
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
      alert("Ingrese algún medio de contacto");
      return;
    }

    var mensaje=document.getElementById("getMensaje");
    if(mensaje.value=='')
    {
      alert("Ingrese mensaje");
      return;
    }
    

    alert("Gracias por su ayuda!");
}