// TIPOS DE VARIÁVEIS

var name = 'variavel' // variável do tipo var sofre o hoisting  independente de onde esteja, até parar no escopo de função ou no escopo global

let name = 'variavel' // variável do tipo let se restringe a qualquer tipo de bloco e não sofre hoisting

const name = 'variavel' // variável do tipo const se comporta igual let, porém não sofre mudança - é constante


// NOMENCLATURAS

var teste = 10 // CORRETO - começa com letra (geralmente minúscula)

var $teste = 10 // CORRETO - começa com um dólar

var _teste = 10 // CORRETO - começa com undeline (usado pra especificar que a variável é restrita àquele escopo enão sai)

/* var 1teste = 10 // ERRADO - possui número no começo */

const TESTE = 10 // CORRETO - geralmente usa-se tudo em maiúscula para indicar que é uma constante

const testeVariavel = 10 // CORRETO - usa-se camelCase
