function Pessoa(){
    this.nome = this.nome
    this.idade = this.idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

new Pessoa()


/*
// exemplo de código usando __proto__

const pessoa = {
    genero: 'masculino'
}

const nei = {
    nome:'Nei',
    idade: 20,
    __proto__: pessoa
}

console.log(nei) //masculino
*/


/*
// exemplo de código usando uma function
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const nei = new Pessoa('Nei', 20)

nei.falar()
*/