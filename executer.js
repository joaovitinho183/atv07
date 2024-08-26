let resposta = document.getElementById("resposta");
let array = [];

function atv1() {
  let vetor = document.getElementById("vetor").value;

  let separa = vetor.split(",");

  let numV = separa.map((i) => parseFloat(i));

  array = numV;

  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  let media = soma / array.length;
  resposta.innerHTML =
    "A média aritmética do vetor: [" + vetor + "] é igual a: " + media;
}
