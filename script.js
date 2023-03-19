let boton_ocultar = document.getElementById('boton_ocultar');

let ocultar = document.getElementById('ocultar');

boton_ocultar.addEventListener('click', estilo);

function estilo() {
  ocultar.classList.toggle('boton_talles');

  if (ocultar.classList.contains("boton_talles")) {
    boton_ocultar.innerHTML = "Ocultar";
  } else {
    boton_ocultar.innerHTML = "Ver talles";
  }
}