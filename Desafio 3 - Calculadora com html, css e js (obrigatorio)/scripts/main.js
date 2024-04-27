// let num = document.getElementsByClassName("number")
// let button = document.getElementsByTagName("button")

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

let numberConcat = '0'
let numberSecundary = '0'
let operador = ''

function toNumber(letra){
    // console.log(letra)
    // console.log(parseInt(letra))
    return parseInt(letra)
}

// funcoes aritmeticas
function soma(number_one, number_two) {
    console.log('----------soma----------')
    result = toNumber(number_one) + toNumber(number_two)
    console.log("resultado:", result)
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
    result = toNumber(number_one)/toNumber(number_two)
    console.log("resultado:", result)
    return result
}

// operadores
function selectOperation(operador){
    console.log('operador: ', operador)
    switch (operador) {
        case '+' :
            result = soma(num_principal.textContent, num_secundario.textContent)
            return result
           
        case '-':
            result = subtracao(num_principal.textContent, num_secundario.textContent)
            return result
        case '*':
            result =  multiplicacao(num_principal.textContent, num_secundario.textContent)
            return result
        case '/':
            result = divisao(num_principal.textContent, num_secundario.textContent)
            return result
        default:
            console.log('erro')
            break
            
    }
}


// asdds
function writeOnScreen_Principal(num){
    // numberConcat = numberConcat + num
    // num_principal.textContent = numberConcat
    if(num != '+'){
        numberConcat = numberConcat + num
        num_principal.textContent = numberConcat
    } else {
        num_principal.textContent = num
    }
    
}


function writeOnScreen_Secundary(){
    // console.log(num)
    numberSecundary = numberConcat
    num_secundario.textContent = numberSecundary
}


// limpar ultimo numero
button_CE.addEventListener('click', () => {
    numberConcat = 0
    writeOnScreen_Principal(numberConcat)
    
})

//limpar tudo
button_C.addEventListener('click', () => {
    writeOnScreen_Principal(0)
    writeOnScreen_Secundary(0)
})

// Numeros
button_zero.addEventListener('click', () => {
    console.log(button_zero.textContent)
    writeOnScreen_Principal(button_zero.textContent)
})

button_one.addEventListener('click', () => {
    console.log(button_one.textContent)
    writeOnScreen_Principal(button_one.textContent)
})

button_two.addEventListener('click', () => {
    console.log(button_two.textContent)
    writeOnScreen_Principal(button_two.textContent)
})

button_three.addEventListener('click', () => {
    console.log(button_three.textContent)
    writeOnScreen_Principal(button_three.textContent)
})

button_four.addEventListener('click', () => {
    console.log(button_four.textContent)
    writeOnScreen_Principal(button_four.textContent)
})

button_five.addEventListener('click', () => {
    console.log(button_five.textContent)
    writeOnScreen_Principal(button_five.textContent)
})

button_six.addEventListener('click', () => {
    console.log(button_six.textContent)
    writeOnScreen_Principal(button_six.textContent)
})

button_seven.addEventListener('click', () => {
    console.log(button_seven.textContent)
    writeOnScreen_Principal(button_seven.textContent)
})

button_eight.addEventListener('click', () => {
    console.log(button_eight.textContent)
    writeOnScreen_Principal(button_eight.textContent)
})

button_nine.addEventListener('click', () => {
    console.log(button_nine.textContent)
    writeOnScreen_Principal(button_nine.textContent)
})

// operadores aritméticos

button_sum.addEventListener('click', () => {
    console.log(button_sum.textContent)
    operador = '+'
    writeOnScreen_Secundary()
    writeOnScreen_Principal(button_sum.textContent)
    
})

button_sub.addEventListener('click', () => {
    console.log(button_sub.textContent)
    operador = '-'
    writeOnScreen_Secundary()
    writeOnScreen_Principal(button_sub.textContent)
})

button_divide.addEventListener('click', () => {
    console.log(button_divide.textContent)
    operador = '/'
    writeOnScreen_Secundary()
    writeOnScreen_Principal(button_divide.textContent)
})

button_multi.addEventListener('click', () => {
    console.log(button_multi.textContent)
    operador = '*'
    writeOnScreen_Secundary()
    writeOnScreen_Principal(button_multi.textContent)
})



button_iqual.addEventListener('click', () => {
    // console.log(button_iqual.textContent)
    result = selectOperation(operador)
    // console.log("resultado do =:", result)
    writeOnScreen_Principal(result)
})

button_dot.addEventListener('click', () => {
    console.log(button_dot.textContent)
    writeOnScreen_Principal(button_dot.textContent)
})



// for (n in num){
//     console.log(num[n].innerText)

// }

