//Função literal
function fun1() {}

//Função em variável
const fun2 = function () {}

//Função em array
const array = [function(a, b) {return a + b}, fun1, fun2]

//Função em atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar function em parâmetro
function run(fun){
    fun()
}

run(function () {return console.log("Teste")})

//Função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a+ b+ c)
    }
}
soma(2,3)(4)