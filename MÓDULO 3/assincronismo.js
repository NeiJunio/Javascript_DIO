// Definindo uma função assíncrona que simula uma operação de tempo de espera
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Definindo uma função assíncrona que processa cada item da lista com um atraso
async function processarLista(lista) {
    for (let item of lista) {
        await delay(1000); // Espera 1 segundo para cada item
        console.log('Processado:', item);
    }
}

// Definindo um array de itens
let itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// Chamando a função assíncrona para processar a lista
processarLista(itens);

// Mensagem para mostrar que o código continua executando enquanto a lista é processada
console.log('Processamento iniciado...');

// Saída esperada:
// Processamento iniciado...
// (1 segundo de espera)
// Processado: Item 1
// (1 segundo de espera)
// Processado: Item 2
// (1 segundo de espera)
// Processado: Item 3
// (1 segundo de espera)
// Processado: Item 4
