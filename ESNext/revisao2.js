//Arrow Function
const soma = (a, b) => a + b

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametro default
function log(texto = 'Node'){
  console.log(texto)
}
log()
log('Com valor')

//Operador rest
function total(...numeros){
  let total = 0
  numeros.forEach(x => total += x);
  return total
}

console.log(total(2,3,4,5))