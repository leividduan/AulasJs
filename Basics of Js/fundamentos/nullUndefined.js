let valor
console.log(valor)

valor = null // ausência de valor

console.log(valor)

//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco) //Undefined

produto.preco = 3.15
console.log(produto)

produto.preco = undefined //Evitar atribuir Undefined
console.log(produto)


produto.preco = null
console.log(!!produto.preco)