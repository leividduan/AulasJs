//Template String
const produto = 'iPad';
console.log(`${produto} é caro!`)


//Destructuring
const [l, e, ...tras] = "Cod3er"
console.log(l,e,...tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'Ana', idade: 9}
