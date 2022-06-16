window.onload= captar();
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function captar(){
  const botonIniciar = document.getElementsByClassName("textoInicio");
  botonIniciar.onclick = iniciarSesion();

}

function iniciarSesion(){
  alert("Sesion iniciada con exito!");
}
