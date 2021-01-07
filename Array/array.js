let aprovados = ['Bia', 'Carlos', 'Ana'];

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 2, 'Teste1', 'Teste2')
console.log(aprovados)
