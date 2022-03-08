const peso = 75
const altura = 1.70
const imc = peso / (altura * altura)

const elementoParagrafo = document.querySelector('p')
elementoParagrafo.innerText = elementoParagrafo.innerText + imc

console.log(imc)