const funcoes = require('./funcoes_auxiliares');

console.log(funcoes.gets());



// OBJECT DESTRUCTURING --> não precisa da função, ja chama direto no const, e ja pode usar os objetos importados;

const { gets, print } = require('./funcoes_auxiliares');

print(gets());