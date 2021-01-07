const produtos = [
  {nome:'Notebook', preco: 2499, fragil: true},
  {nome:'iPad Pro', preco: 4199, fragil: true},
  {nome:'Copo de Vidro', preco: 12.49, fragil: true},
  {nome:'Copo de Plástico', preco: 18.49, fragil: false},
];


console.log(produtos.filter(function (p){
  return p.fragil === true
}));

const produtoCaro = e => e.preco >= 500
const produtoFragil = e => e.fragil
console.log(produtos.filter(produtoCaro).filter(produtoFragil))