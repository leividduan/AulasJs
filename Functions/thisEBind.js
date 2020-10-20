const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar();

const falar = pessoa.falar
falar() //Conflito entre os paradigmas: Funcional e Orientação a Objeto


const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()