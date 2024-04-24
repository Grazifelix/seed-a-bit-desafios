const button_soma = document.querySelector("#button-soma")
const button_subtracao = document.querySelector("#button-sub")
const contadorText = document.querySelector("#contador-num")
let contador = 0;

function somar(cont) {
    return cont += 1
}

function subtrair(cont) {
    return cont -= 1
}

button_soma.addEventListener('click', () => {
    contador = somar(contador)
    contadorText.textContent = contador
})


button_subtracao.addEventListener("click", () => {
    if (contador != 0) {
        contador = subtrair(contador)
        contadorText.textContent = contador
    }
})
