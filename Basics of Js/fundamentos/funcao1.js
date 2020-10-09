//Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(3,2);


function soma(a, b = 0){
    return a + b
}

console.log(soma(2))