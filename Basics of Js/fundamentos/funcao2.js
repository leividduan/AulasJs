// Função em uma variável

const { array } = require("yargs")

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função Arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))


//Retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))


const imprimir2 = a => console.log(a)
array[0]()


