// Definindo uma função simples chamada "saudacao"
function saudacao(p1, p2) {
    console.log(this.msg + ', ' + p1 + ' e ' + p2 + '!');
}

// Invocação direta
var obj = { msg: 'Olá' };
saudacao.call(obj, 'João', 'Maria'); // Saída: Olá, João e Maria!

// Usando "call"
saudacao.call(obj, 'Pedro', 'Ana'); // Saída: Olá, Pedro e Ana!

// Usando "apply"
saudacao.apply(obj, ['Carlos', 'Bia']); // Saída: Olá, Carlos e Bia!

// Usando o operador "new"
function Pessoa(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log('Meu nome é ' + this.nome);
    };
}

var pessoa1 = new Pessoa('Miguel');
pessoa1.falar(); // Saída: Meu nome é Miguel

var pessoa2 = new Pessoa('Laura');
pessoa2.falar(); // Saída: Meu nome é Laura
