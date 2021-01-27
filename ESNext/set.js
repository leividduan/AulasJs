const times = new Set()

times.add('Flamengo')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco')
times.add('Flamengo')

console.log(times)
console.log(times.size)

const nomes = ['João', 'José', 'Maria', 'José']
const nomesSet = new Set(nomes)
console.log(nomesSet)