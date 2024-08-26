let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')

let array = []

function gerar() {
    let va = 0
    for (i = 0; i < 5; i++) {
        va = Math.floor(Math.random() * (10 - 1 + 1)) + 1
        array.push(Number(va))
    }
}

function calcula() {
    let somapar = 0
    let somaimpar = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            somapar += array[i]
        } else {
            somaimpar += array[i]
        }
    }

    resposta.innerHTML = "O vetor gerado foi: (" + array + ")"
    resposta2.innerHTML += "A soma dos pares é: " + somapar + " e a soma dos impares é igual a: " + somaimpar
}