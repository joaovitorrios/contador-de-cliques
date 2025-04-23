let contador = 0;

const elementoContador = document.getElementById("contador");
const botao = document.getElementById("botao");
const resetar = document.getElementById("resetar");

botao.addEventListener("click", () => {
  contador++;
  elementoContador.textContent = contador;
});

resetar.addEventListener("click", () => {
  contador = 0;
  elementoContador.textContent = contador;
});
