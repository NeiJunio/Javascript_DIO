/* OBJETOS

--> Sempre entre chaves;
--> Coleção de valores / dados;
--> Funciona através de chaves e valores, exemplo: 

const nei={
    nome: 'Nei Junio Nogueira Gomes',
    idade: 20
};

console.log(nei)

nome e idade são chaves;
Nei Junio Nogueira Gomes e 20 são valores


--> Para incrementar algum valor que não foi definido anteriormente, basta eu colocar o nome da objeto, seguido de ponto, chave e o seu respectivo valor, exemplo:

    nei.altura = 1.82;

    na saída dpo terminal ele mostrará: 

    { nome: 'Nei Junio Nogueira Gomes', idade: 20, altura: 1.82 }

--> Para remover algum valor que foi declarado no objeto, basta usar o comando delete , seguido do nome da objeto, ponto e sua chave (não precisa do valor), exemplo:

    delete nei.nome; (nesse caso, excluirá a chave nome e o seu respectivo valor)


--> MÉTODOS: Função dentro de um objeto;

--> THIS: dis respeito ao contexto em que a função está sendo utilizada, ou seja, o this assume o objeto, exemplo:
    const pessoa = {
    nome: 'Nei Junio Nogueira Gomes',
    idade: 20,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

OBS: nesse caso, no console.log deve-se usar crase ao invés de aspas, para fazer a interpolação de strings;

--> INTERPOLAÇÃO DE STRINGS: permite a inclusão de valores de variáveis diretamente dentro de uma string, pode incluir qualquer expressão JavaScript dentro de chaves ${} e ela será avaliada e convertida em uma string, exemplo:

    let nome = 'Nei';
    let idade = 20;
    console.log(`Meu nome é ${nome} e minha idade é ${idade}`);

    Neste exemplo, ${nome} será substituído pelo valor da variável nome e ${idade} será substituído pelo valor da variável idade;


--> Para acessar dinamicamente os valores de objetos, posso usar o seguinte código:
    console.log(pessoa['nome']);

    nesse caso, ele vai imprimir a chave nome, que está dentro do objeto pessoa;

*/

const pessoa = {
    nome: 'Nei Junio Nogueira Gomes',
    idade: 20,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa['nome']);