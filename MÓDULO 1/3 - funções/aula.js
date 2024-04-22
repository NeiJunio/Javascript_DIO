// function incrementarjuros(valor, percentualJuros){
//     const valorDeAcrescimo = (percentualJuros / 100) * valor;
//     return valor + valorDeAcrescimo;
// }

// console.log(incrementarjuros(100,10));
// console.log(incrementarjuros(100,15));
// console.log(incrementarjuros(100,20));


// function calcularjuros() {

// }

// function main() {
//     console.log('Programa principal')
//     calcularjuros();
// }

// main();


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal')
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso')
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso')
    } else {
        return ('Obesidade grave')
    }

}

function main() {
    const peso = 62;
    const altura = 1.82;

    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
}

main();

/*
FUNÇÃO INVOCADA IMEDIATAMENTE

ela cria e se executa na sequência, não é necessário chamar ela em seguida, tambem posso usar quando tenho códigos que eu quero executar apenas uma vez, então eu invoco imediatamente pq não vou precisar mais desse código no decorrer do projeto

(function main(){
    const peso = 62;
    const altura = 1.82;

    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
})();*/


