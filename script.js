alert("O NUMERO SORTEADO APARECERÁ DE BAIXO DO BOTÃO 'SORTEAR' ");
const butao = document.querySelector("#button");

function buttons() {
  const firstInput = document.querySelector("#first-input").value;
  console.log(firstInput);
  const secondInput = document.querySelector("#second-input").value;
  console.log(secondInput);
  console.log("o botão foi clicado");

  const numaleatorio = Math.floor(
    Math.random() * (secondInput - firstInput + 1) + firstInput
  );

  console.log(numaleatorio);

  document.querySelector("#numgerado").innerHTML = numaleatorio;
}

butao.addEventListener("click", buttons);
