const _titulo = document.querySelector("#titulo");
const _detalle = document.querySelector("#detalle");
const form = document.querySelector("#post-form");
const div = document.querySelector("#lista-publicaciones");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var titulo = _titulo.value;
  var detalle = _detalle.value;

  if (titulo.length == 0){
    alert("No es posible publicar un post sin título");
  }
  else{
    div.innerHTML = `<div>  
      <p>Titulo: ${titulo}</p>
      <p>Titulo: ${detalle}</p>
    </div>`;
  }
});
