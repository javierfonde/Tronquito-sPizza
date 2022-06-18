function accionarPersiana(){
    const persiana = document.getElementById("desplegable");
  
    if(persiana.style.top=="100%"){
        retraerPersiana(persiana);

    }else{
        desplegarPersiana(persiana);
    }
}

function desplegarPersiana(persiana){
    persiana.style.top="100%"; 
}

function retraerPersiana(persiana){
    persiana.style.top="-200%";
}