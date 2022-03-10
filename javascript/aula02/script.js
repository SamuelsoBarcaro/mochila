const btnSaudar = document.querySelector("#btn-saudar")

btnSaudar.onclick = () => {
    //Capturar o imput e o select
    const imput = document.querySelector('#name').value
    const opcao = document.querySelector('#opcao').value

    alert(opcao + ", " + imput)
}