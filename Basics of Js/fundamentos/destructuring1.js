const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Retiro da estrutura Pessoa os valores de nome e idade
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

//Retiro de dentro da estrutura Endereco, alocada em Pessoa.
const { endereco : {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)