
const alunos = ['Nei', 'Elton', 'teste'];


// ADICIONAR ITEM NO ARRAY NO FIM DA LISTA;
alunos.push('adicionando_item');

// ADICIONAR ITEM EM POSIÇÃO ESPECÍFICA - substitui o item caso ja tenha algum naquela posição;
alunos[3] = 'posição3'

// REMOVER ITEM NO ARRAY - remove o ultimo item;
alunos.pop();

// REMOVER ITEM NO ARRAY - remove o primeiro item;
alunos.shift();


console.log(alunos);
//console.log(alunos[0]); pra puxar o primeiro item da lista, começando sempre pelo zero;

//IMPRIMIR TAMANHO DA LISTA
console.log(alunos.length);