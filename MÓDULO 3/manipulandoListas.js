
// Definindo um array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// FOREACH


// Usando forEach para iterar sobre cada elemento do array
numeros.forEach(function(numero, indice, array) {
    // Função de callback que será chamada para cada elemento do array
    // 'numero' é o valor atual do elemento
    // 'indice' é a posição do elemento no array
    // 'array' é o próprio array sendo iterado

    // Imprimindo o valor e o índice de cada elemento
    console.log('Número:', numero, 'Índice:', indice);

    // Podemos modificar os elementos do array diretamente se necessário
    array[indice] = numero * 2;
});

// Após a iteração, o array original foi modificado
console.log('Array modificado:', numeros); // Saída: Array modificado: [2, 4, 6, 8, 10]

// ----------------------------------------------


// FILTER


// Usando filter para criar um novo array com números pares
let numerosPares = numeros.filter(function(numero) {
    // A função callback retorna true se o número é par
    // e false se o número é ímpar
    return numero % 2 === 0;
});

// Imprimindo o array original
console.log('Array original:', numeros); // Saída: Array original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Imprimindo o novo array com números pares
console.log('Números pares:', numerosPares); // Saída: Números pares: [2, 4, 6, 8, 10]

// ----------------------------------------------


// MAP


// Usando map para criar um novo array com os números ao quadrado
let numerosAoQuadrado = numeros.map(function(numero) {
    // A função callback retorna o novo valor para cada elemento do array original
    return numero * numero;
});

// Imprimindo o array original
console.log('Array original:', numeros); // Saída: Array original: [1, 2, 3, 4, 5]

// Imprimindo o novo array com os números ao quadrado
console.log('Números ao quadrado:', numerosAoQuadrado); // Saída: Números ao quadrado: [1, 4, 9, 16, 25]

// ----------------------------------------------


// REDUCE

// Usando reduce para calcular a soma de todos os números do array
let soma = numeros.reduce(function(acumulador, numeroAtual) {
    // 'acumulador' é o valor acumulado da operação até o momento
    // 'numeroAtual' é o valor atual do elemento sendo processado
    return acumulador + numeroAtual;
}, 0); // O segundo argumento '0' é o valor inicial do acumulador

// Imprimindo o array original
console.log('Array original:', numeros); // Saída: Array original: [1, 2, 3, 4, 5]

// Imprimindo a soma de todos os números do array
console.log('Soma dos números:', soma); // Saída: Soma dos números: 15


// ----------------------------------------------


// JOIN

// Definindo um array de strings
let frutas = ['Maçã', 'Banana', 'Laranja', 'Manga'];

// Usando join para concatenar todos os elementos do array em uma única string
let listaDeFrutas = frutas.join(', ');

// Imprimindo o array original
console.log('Array original:', frutas); // Saída: Array original: ['Maçã', 'Banana', 'Laranja', 'Manga']

// Imprimindo a string resultante
console.log('Lista de frutas:', listaDeFrutas); // Saída: Lista de frutas: Maçã, Banana, Laranja, Manga
