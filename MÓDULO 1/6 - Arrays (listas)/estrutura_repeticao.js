const nome = 'Nei Junio Nogueira Gomes';

/*ESTRUTURA FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
};

//resultado no console:
0
1
2
3
4
5
6
7
8
9*/

//IMPRIMIR UM NOME USANDO ESTRUTURA FOR (vai imprimir nome enquanto a let i for menor que o tamanho maximo definido para ela, nesse caso, vai imprimir o nome 3x)

for (let i = 0; i < 3; i++) {
    console.log(nome);
};


//IMPRIMIR LETRA POR LETRA DE UM NOME USANDO ESTRUTURA FOR (vai imprimir letra por letra enquanto a let i for menor que o tamanho maximo da palavra)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
};


//ESTRUTURA PADRÃO DO FOR OFERECIDA PELA PRÓPRIA IDE

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}


//PARA CADA EXEMPLO, UTILIZAR A CONST NOME INDIVIDODUAL, ELA SÓ ESTA SEPARADA NO TOPO PARA NÃO CONFLITAR;