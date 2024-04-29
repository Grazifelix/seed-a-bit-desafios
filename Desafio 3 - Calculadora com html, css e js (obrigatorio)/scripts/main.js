const button_zero = document.querySelector("#button-0")
const button_one = document.querySelector("#button-1")
const button_two = document.querySelector("#button-2")
const button_three = document.querySelector("#button-3")
const button_four = document.querySelector("#button-4")
const button_five = document.querySelector("#button-5")
const button_six = document.querySelector("#button-6")
const button_seven = document.querySelector("#button-7")
const button_eight = document.querySelector("#button-8")
const button_nine = document.querySelector("#button-9")

/*Operadores aritméricos*/
const button_sum = document.querySelector("#button-sum")
const button_divide = document.querySelector("#button-division")
const button_multi = document.querySelector("#num-mult")
const button_sub = document.querySelector("#button-sub")
const button_iqual = document.querySelector("#button-igual")
const button_dot = document.querySelector("#button-dot")


const button_CE = document.querySelector("#button-CE")
const button_C = document.querySelector("#button-C")

// Numeros na tela
const num_principal = document.querySelector('#num-principal')
const num_secundario = document.querySelector('#num-secundario')

let numberConcat = ''
let numberSecundary = ''
let numberPrincipal = ''
let operador = ''
let ce_pressed = false

function toNumber(letra) {
    return parseInt(letra)
}

// funcoes aritmeticas
function soma(number_one, number_two) {
    console.log('----------soma----------')
    result = toNumber(number_one) + toNumber(number_two)
    console.log("resultado soma:", result)
    return result
}

function subtracao(number_one, number_two) {
    console.log('----------subtracao----------')
    result = toNumber(number_one) - toNumber(number_two)
    console.log("resultado:", result)
    return result
}

function multiplicacao(number_one, number_two) {
    console.log('----------multiplicacao----------')
    result = toNumber(number_one) * toNumber(number_two)
    console.log("resultado:", result)
    return result
}

function divisao(number_one, number_two) {
    // o resultado esta retornando sempre 1
    console.log('----------divisao----------')
    result = toNumber(number_one) / toNumber(number_two)
    console.log("resultado:", result)
    return result
}

// operadores
function selectOperation(operador) {
    console.log('operador: ', operador)
    switch (operador) {
        case '+':
            result = soma(numberSecundary, numberPrincipal)
            return result
        case '-':
            result = subtracao(numberSecundary, numberPrincipal)
            return result
        case 'x':
            result = multiplicacao(numberSecundary, numberPrincipal)
            return result
        case '/':
            result = divisao(numberSecundary, numberPrincipal)
            return result
        default:
            console.log('erro')
            break

    }
}


// 
function writeOnScreen_Principal(num) {
    num_principal.textContent = num
}

function writeOnScreen_Secundary(num) {
    num_secundario.textContent = num
}

function concat(num) {
    numberConcat = numberConcat + num
    console.log('CONCAT:', numberConcat)

    return numberConcat
}

function concatNumber(num) {
    numberPrincipal = numberPrincipal + num
    console.log('NumberPrincipal:', numberPrincipal)

}

// limpar ultimo numero
button_CE.addEventListener('click', () => {
    ce_pressed = true
    numberConcat = '0'
    numberPrincipal = '0'
    writeOnScreen_Principal(numberConcat)

})

//limpar tudo
button_C.addEventListener('click', () => {
    numberConcat = '0'
    numberPrincipal = '0'
    numberSecundary = '0'
    writeOnScreen_Principal('0')
    writeOnScreen_Secundary('0')
})

// Numeros
button_zero.addEventListener('click', () => {
    num = concat(button_zero.textContent)
    concatNumber(button_zero.textContent)
    writeOnScreen_Principal(num)
})

button_one.addEventListener('click', () => {
    num = concat(button_one.textContent)
    concatNumber(button_one.textContent)
    writeOnScreen_Principal(num)
})

button_two.addEventListener('click', () => {
    num = concat(button_two.textContent)
    concatNumber(button_two.textContent)
    writeOnScreen_Principal(num)
})

button_three.addEventListener('click', () => {
    num = concat(button_three.textContent)
    concatNumber(button_three.textContent)
    writeOnScreen_Principal(num)
})

button_four.addEventListener('click', () => {
    num = concat(button_four.textContent)
    concatNumber(button_four.textContent)
    writeOnScreen_Principal(num)
})

button_five.addEventListener('click', () => {
    num = concat(button_five.textContent)
    concatNumber(button_five.textContent)
    writeOnScreen_Principal(num)
})

button_six.addEventListener('click', () => {
    num = concat(button_six.textContent)
    concatNumber(button_six.textContent)
    writeOnScreen_Principal(num)
})

button_seven.addEventListener('click', () => {
    num = concat(button_seven.textContent)
    concatNumber(button_seven.textContent)
    writeOnScreen_Principal(num)
})

button_eight.addEventListener('click', () => {
    num = concat(button_eight.textContent)
    concatNumber(button_eight.textContent)
    writeOnScreen_Principal(num)
})

button_nine.addEventListener('click', () => {
    num = concat(button_nine.textContent)
    concatNumber(button_nine.textContent)
    writeOnScreen_Principal(num)
})


// operadores aritméticos
button_sum.addEventListener('click', () => {

    if (ce_pressed == false) {
        if (numberSecundary != '' && operador != '' && numberPrincipal != '') {
            numberConcat = ''
            num = concat(button_sum.textContent)
            writeOnScreen_Principal(num)
            result = selectOperation(operador)
            numberSecundary = result
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
            operador = button_sum.textContent

        } else {
            num = concat(button_sum.textContent)
            writeOnScreen_Principal(num)
            operador = button_sum.textContent
            numberSecundary = numberPrincipal
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
        }


    } else {
        ce_pressed = false
    }

})




button_sub.addEventListener('click', () => {

    if (ce_pressed == false) {
        if (numberSecundary != '' && operador != '' && numberPrincipal != '') {
            numberConcat = ''
            num = concat(button_sub.textContent)
            writeOnScreen_Principal(num)
            result = selectOperation(operador)
            numberSecundary = result
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
            operador = button_sub.textContent

        } else {
            num = concat(button_sub.textContent)
            writeOnScreen_Principal(num)
            operador = button_sub.textContent
            numberSecundary = numberPrincipal
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
        }

    } else {
        ce_pressed = false
    }

})

button_divide.addEventListener('click', () => {

    if (ce_pressed == false) {
        if (numberSecundary != '' && operador != '' && numberPrincipal != '') {
            numberConcat = ''
            num = concat(button_divide.textContent)
            writeOnScreen_Principal(num)
            result = selectOperation(operador)
            numberSecundary = result
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
            operador = button_divide.textContent

        } else {
            num = concat(button_divide.textContent)
            writeOnScreen_Principal(num)
            operador = button_divide.textContent
            numberSecundary = numberPrincipal
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
        }

    } else {
        ce_pressed = false
    }


})

button_multi.addEventListener('click', () => {

    if (ce_pressed == false) {

        if (numberSecundary != '' && operador != '' && numberPrincipal != '') {
            numberConcat = ''
            num = concat(button_multi.textContent)
            writeOnScreen_Principal(num)
            result = selectOperation(operador)
            numberSecundary = result
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
            operador = button_multi.textContent

        } else {
            num = concat(button_multi.textContent)
            writeOnScreen_Principal(num)
            operador = button_multi.textContent
            numberSecundary = numberPrincipal
            writeOnScreen_Secundary(numberSecundary)
            numberPrincipal = ''
        }


    } else {
        ce_pressed = false
    }

})

button_dot.addEventListener('click', () => {
    num = concat(button_dot.textContent)
    writeOnScreen_Principal(num)

    //implementar lógica do botão de ponto
    if (ce_pressed == false) {

    } else {
        ce_pressed = false
    }
})


button_iqual.addEventListener('click', () => {
    result = selectOperation(operador)
    numberPrincipal = result
    operador = ''
    numberConcat = ''
    writeOnScreen_Principal(numberPrincipal)

})
