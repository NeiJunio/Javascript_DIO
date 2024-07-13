// Um closure é uma função que lembra o ambiente em que foi criada.
// Vamos criar um exemplo simples para demonstrar isso.

// Função "criadorDeSaudacao" que retorna outra função
function criadorDeSaudacao(saudacao) {
    // A função interna é a closure
    return function(nome) {
        // A função interna tem acesso à variável "saudacao"
        console.log(saudacao + ', ' + nome + '!');
    };
}

// Criamos uma nova função chamada "saudacaoOla" usando "criadorDeSaudacao"
var saudacaoOla = criadorDeSaudacao('Olá');

// Chamamos a nova função "saudacaoOla" com um nome
saudacaoOla('João'); // Saída: Olá, João!

// Podemos criar outra função com uma saudação diferente
var saudacaoOi = criadorDeSaudacao('Oi');

// Chamamos a nova função "saudacaoOi" com um nome diferente
saudacaoOi('Maria'); // Saída: Oi, Maria!

// Ambas as funções "saudacaoOla" e "saudacaoOi" lembram da saudação original
// com a qual foram criadas, graças aos closures.
