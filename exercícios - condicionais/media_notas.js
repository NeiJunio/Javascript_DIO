/* exercícios de cálculo de média, com classificação:
 -média menor que 5: reprovado;
 -média entre 5 e 7: recuperação;
 -média maior que 7: aprovado;
 */

const nota1 = 5;
const nota2 = 10;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log('Média final: ' + media.toFixed(2))

if (media < 5) {
    console.log('Reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação!');
} else {
    console.log('Aprovado!');
}