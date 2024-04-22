
// const numero = 0;

// const numeroPar = (numero % 2) === 0; //nesse caso, se o resultado da divsão for zero, ele retorna valor true para numeroPar, caso contrário, retorna valor false


// if (numeroPar) {
//     console.log('Par')
// }

// else {
//     console.log('Impar')
// }

const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0; 

if (numero === 0){
    console.log('O número é inválido')
} else {
    if (numeroDivisivelPor5) {
        console.log('Sim')
    } 

    else {
        console.log('Não')
    }
}