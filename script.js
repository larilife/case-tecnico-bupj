const botao = document.getElementById("botaoComunicados");
const lista = document.getElementById("listaComunicados");

botao.addEventListener("click", () => {
  const listaEstaOculta = lista.classList.toggle("oculto");

  botao.textContent = listaEstaOculta
    ? "Mostrar comunicados"
    : "Ocultar comunicados";

  botao.setAttribute("aria-expanded", String(!listaEstaOculta));
});
