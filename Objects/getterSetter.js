const sequencia ={
  _valor: 1,
  get valor(){return this.valor++},
  set valor(valor) {
    if(valor > this.valor){
      this.valor = valor
    }
  }
}