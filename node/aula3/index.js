//inicio do escopo geral

let variavelNumero = 10 // int or float
let variavelTexto = "texto"
let variavelBoleana = false // Este tipo pode receber true or false
let variavelObjeto = {
    nome: "Álvaro",
    idade: 26,
    masculino: true
}
let variavelArray = [] // podemos guardar vários dados, mas sempre o mesmo - dados ou valores
let variavelIndefinida
let variavelNull = null
let variavelNan = "2" + 35 // não é número e sim uma string

//MÉTODO DE ARRAY
let nomeDosAlunosDaDh = ["Álvaro", "Patrick"]

nomeDosAlunosDaDh.push("Samuelso") //push adiciona mais um item no fim do array

nomeDosAlunosDaDh.pop() // remove o último item do array

const posicaoPatrick = nomeDosAlunosDaDh.indexOf("Patrick")


// FUNÇÕES E ESCOPO

function imprimeResultadoArray(){
   
    //Este é o início do escopo da função
    console.log(nomeDosAlunosDaDh)
   
    const umValorQualquer = "Valor qualquer"

    console.log(umValorQualquer)

    //Este é o fim do escopo da função
}

function outraFuncao(){
   
    //Este é o início do escopo da função
    
    console.log(nomeDosAlunosDaDh)
    
    //Este é o fim do escopo da função
}

imprimeResultadoArray()
outraFuncao()

//fim do escopo geral