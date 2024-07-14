// Criando uma nova Promise chamada 'promessaDeUmNumeroQualquer'
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    // Usando setTimeout para simular uma operação assíncrona
    setTimeout(() => {
        // Gerando um número aleatório entre 0 e 299
        const numero = parseInt(Math.random() * 300);
        // Resolving (resolvendo) a Promise com o número gerado
        resolve(numero);
    }, 1000); // A operação será executada após 1 segundo
});

// Manipulando a Promise criada
promessaDeUmNumeroQualquer
    // then() é chamado quando a Promise é resolvida com sucesso
    .then((value) => {
        // Imprimindo o valor resolvido (número gerado)
        console.log(value);
    })
    // catch() é chamado quando a Promise é rejeitada (ocorre um erro)
    .catch((error) => {
        // Imprimindo o erro
        console.error(error);
    })
    // finally() é chamado independentemente de a Promise ter sido resolvida ou rejeitada
    .finally(() => {
        // Imprimindo uma mensagem de conclusão do processo
        console.log('Processo concluído!');
    });

/* 
### Explicação

1. **Criação da `Promise`**:
   - A `Promise` é criada com `new Promise((resolve, reject) => { ... })`.
   - Dentro da função fornecida para a `Promise`, usamos `setTimeout` para simular uma operação assíncrona que leva 1 segundo.
   - Após 1 segundo, um número aleatório entre 0 e 299 é gerado (`parseInt(Math.random() * 300)`).
   - A `Promise` é resolvida com esse número, chamando `resolve(numero)`.

2. **Manipulação da `Promise`**:
   - `then()` é usado para definir o que fazer quando a `Promise` é resolvida com sucesso. Neste caso, imprimimos o valor gerado.
   - `catch()` é usado para definir o que fazer se a `Promise` for rejeitada (caso ocorra um erro). Neste exemplo, imprimimos o erro no console.
   - `finally()` é usado para executar código que deve ser executado independentemente de a `Promise` ter sido resolvida ou rejeitada. Neste exemplo, imprimimos uma mensagem indicando que o processo foi concluído.

### Resumo

- **`Promise`**: Representa uma operação que pode ser concluída com sucesso (`resolve`) ou falhar (`reject`) no futuro.
- **`then()`**: Define o que fazer quando a `Promise` é resolvida com sucesso.
- **`catch()`**: Define o que fazer quando a `Promise` é rejeitada.
- **`finally()`**: Define o que fazer independentemente de a `Promise` ter sido resolvida ou rejeitada.

Este exemplo ilustra como usar `Promise` para lidar com operações assíncronas em JavaScript, fornecendo uma maneira clara de tratar resultados e erros, além de garantir que determinadas ações sejam sempre executadas ao final do processo.
*/
