const btnCalcular = document.querySelector('#btn-calcular')

btnCalcular.onclick = () => {
  var numero1 = document.querySelector('#numero1').value
  var numero2 = document.querySelector('#numero2').value
  var opcao = document.querySelector('#opcao').value
  var resultado = 0

  numero1 = parseFloat(numero1)
  numero2 = parseFloat(numero2)

  if (numero1 && numero2) {
    if (opcao == 'soma') {
      resultado = numero1 + numero2
    }

    if (opcao == 'subtracao') {
      resultado = numero1 - numero2
    }

    if (opcao == 'multiplicacao') {
      resultado = numero1 * numero2
    }

    if (opcao == 'divisao') {
      resultado = numero1 / numero2
    }
    alert('o resultado da ' + opcao + ' e ' + resultado)
  } else {
    alert('ERRO, o numero1 e numero2 são obrigatorios')
  }
}

