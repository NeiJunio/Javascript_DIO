// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade = idade
// }

// Pessoa.prototype.falar = function() {
//     console.log(`Meu nome é ${this.nome}`)
// }

// const nei = new Pessoa('Nei',20)
// nei.falar()



/* 

// EXPLICAÇÃO


// Definição do construtor Pessoa, que aceita dois parâmetros: nome e idade
function Pessoa(nome, idade) {
    // 'this' se refere ao objeto que será criado quando o construtor for chamado
    this.nome = nome;
    this.idade = idade;
}

// Adiciona um método 'falar' ao protótipo de Pessoa
Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
}

// Criação de um objeto 'nei' com uma propriedade 'genero'
const nei = {
    genero: 'masculino'
}

// Usando 'call' para chamar a função construtora 'Pessoa' no contexto do objeto 'nei'
// O método 'call' permite que você chame uma função com um valor 'this' explicitamente
// Aqui, 'this' dentro da função 'Pessoa' será 'nei'
// Portanto, 'nei.nome' será definido como 'Nei Junio' e 'nei.idade' será definido como 20
Pessoa.call(nei, 'Nei Junio', 20);

// Exibe o objeto 'nei' no console
// O objeto agora terá as propriedades 'nome' e 'idade' adicionadas, além da propriedade 'genero'
console.log(nei);




Função Construtora Pessoa:

Pessoa é uma função que age como um construtor. Quando chamada com new, ela cria um novo objeto e define suas propriedades nome e idade.
Método .call:

call é um método disponível para todas as funções em JavaScript.
Ele permite que você chame uma função, especificando explicitamente qual será o valor de this dentro daquela função.
No exemplo, Pessoa.call(nei, 'Nei Junio', 20) faz com que this dentro da função Pessoa se refira ao objeto nei.
Assim, nei.nome é definido como 'Nei Junio' e nei.idade é definido como 20.
Objeto nei:

Originalmente, nei possui apenas a propriedade genero com o valor 'masculino'.
Após a chamada Pessoa.call(nei, 'Nei Junio', 20), nei também passa a ter as propriedades nome e idade.
Saída:

O console exibirá o objeto nei com as propriedades genero, nome e idade.
O método .call é muito útil quando você deseja invocar uma função com um valor específico para this, especialmente em situações onde você não deseja criar um novo objeto, mas sim modificar um existente.

*/
