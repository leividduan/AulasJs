const carrinho = 
['{"nome":"Borracha", "preco": 3.45}',
'{"nome":"Caderno", "preco": 13.90}',
'{"nome":"Kit de Lapis", "preco": 41.22}',
'{"nome":"Caneta", "preco": 7.50}'];

const JsonToArray = function(e){
  const obj = JSON.parse(e)
  return obj.preco
}


let resultado = carrinho.map(JsonToArray)
console.log(resultado)


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)