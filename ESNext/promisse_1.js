function primeiroElemento(array) {
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}

function letraMinuscula(letra) {
  return letra.toLowerCase()
}

new Promise( function(resolve){
  resolve(['Ana','Lucas','Bia','Carlos'])
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)

  // .then(valor => valor[0])
  // .then(primeiro => primeiro[0])
  // .then(letra => letra.toLowerCase())
  // .then(letraMinuscular => console.log(letraMinuscular))


