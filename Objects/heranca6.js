function Aula(nome, videoId){
  this.nome = nome;
  this.videoId = videoId;
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Bem Vindo', 456)

console.log(aula1, aula2)