class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023-idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const nei = new Pessoa ('Nei', 20);

console.log(nei);


/*o constructor é o que acontece quando usamos o new Pessoa, é a mesma estrutura, servindo para identficar cada tipo de dados

constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;

new Pessoa ('Nei', 20);

usando esses dados, entende-se que ficaria da seguinte forma a identificação de dados:

constructor(nome, idade) {
    this.nome = nei;
    this.idade = 20;*/