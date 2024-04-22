//instância: é uma ocorrência de uma classe seria um valor específico, uma das possiveis combinações de dados. Ex: Nei, e tem 20 anos;

//classe é a definição e instância é a ocorrência

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

//Exemplo de instância
const nei = new Pessoa();
nei.nome = 'Nei Junio Nogueira Gomes';
nei.idade = 20;

const elton = new Pessoa();
elton.nome = 'Élton José Nogueira Gomes';
elton.idade = 12;

nei.descrever();
elton.descrever();