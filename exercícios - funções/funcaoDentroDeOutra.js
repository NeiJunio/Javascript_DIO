function escrevaMeuNome(nome) {
    return (nome)
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Nei') + ' é Maior de idade')
    } else {
        console.log(escrevaMeuNome('Élton') + ' é Menor de idade')
    }
}

verificarIdade(18);
verificarIdade(15);
