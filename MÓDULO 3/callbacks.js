// Definindo uma função que aceita outra função como argumento (callback)
function processarDados(dados, callback) {
    console.log("Processando dados...");
    // Simulando um processamento com setTimeout
    setTimeout(function() {
        // Dados processados
        const resultado = dados.map(dado => dado * 2);
        // Chamando a função callback com o resultado
        callback(resultado);
    }, 1000);
}

// Função callback que será passada para processarDados
function mostrarResultado(resultado) {
    console.log("Dados processados:", resultado);
}

// Array de dados a serem processados
const dados = [1, 2, 3, 4, 5];

// Chamando a função processarDados com os dados e a função callback
processarDados(dados, mostrarResultado);

// Saída esperada:
// Processando dados...
// (Após 1 segundo)
// Dados processados: [2, 4, 6, 8, 10]
