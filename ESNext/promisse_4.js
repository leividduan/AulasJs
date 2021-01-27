function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(function () {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      resolve(aleatorio)
    }, tempo)
  })
}


function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(10, 100, 4000),
    gerarNumerosEntre(10, 100, 100),
    gerarNumerosEntre(10, 100, 3000),
    gerarNumerosEntre(10, 100, 300),
    gerarNumerosEntre(10, 100, 1500),
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then(console.log)
  .then(()=>{
    console.timeEnd('promise')
  })