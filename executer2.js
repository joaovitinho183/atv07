let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')

let array = []

function gerar(max, min) {
    let soma = 0
    for (i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min
        array.push(Number(random))
        soma += array[i]
    }
    console.log(array)
    return soma
}

function calcula() {
    
    let media =  gerar(10, 1) / array.length
    
    resposta.innerHTML = "O vetor gerado foi: (" + array + ")"
    resposta2.innerHTML += "A média deste vetor é: " + media 
}