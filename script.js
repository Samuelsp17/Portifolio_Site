//teste de escrita de cursor "sobre mim"
var comentario = document.querySelector(".comentario");
var texto = comentario.getAttribute("data-texto");
var index = 0;

function digitarComentario() {
  if (index < texto.length) {
    comentario.textContent += texto[index];
    index++;
    setTimeout(digitarComentario, 20); // ajusta a velocidade aqui
  }
}

// Dispara a digitação quando a página carregar
window.addEventListener("load", digitarComentario);