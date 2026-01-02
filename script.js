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



//card de projetos
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(other => {
            if (other !== card) {
                other.classList.remove("active");
                other.dataset.open = "false";
            }
        });

        const isOpen = card.dataset.open === "true";
        card.dataset.open = isOpen ? "false" : "true";
        card.classList.toggle("active");
    });
});
