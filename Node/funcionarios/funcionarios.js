const axios = require('axios')
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
  return func.salario < funcAtual.salario ? func : funcAtual
}


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response =>{
  const funcionarios = response.data

  const funcionario = funcionarios
  .filter(chineses)
  .filter(mulheres)
  .reduce(menorSalario)

  console.log(funcionario)
})