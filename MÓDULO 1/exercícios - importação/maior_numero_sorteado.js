/* 1) uma sala contem 5 alunos e para cada aluno foi sorteado um número de1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostra o maior número sorteado;

Exemplo:
    Entrada:
        5
        50
        10
        98
        23

    Saída:
        98*/

const { gets, print } = require('./funcoes_auxiliares');
const numerosSorteado = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteado.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteado.length; i++) {
    const numeroSorteado = numerosSorteado[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);


// // SIMPLFICANDO A LÓGICA
// const { gets, print } = require('./funcoes_auxiliares');

// let maiorValorEncontrado = 0;

// for (let i = 0; i < 5; i++) {
//     const numeroSorteado = gets();
//     if (numeroSorteado > maiorValorEncontrado) {
//         maiorValorEncontrado = numeroSorteado;
//     }
// }

// print(maiorValorEncontrado);

