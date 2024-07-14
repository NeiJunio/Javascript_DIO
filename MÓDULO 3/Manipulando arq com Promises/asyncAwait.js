// Importando o módulo 'fs' para trabalhar com o sistema de arquivos
const fs = require('fs');

// Importando o módulo 'path' para trabalhar com caminhos de arquivos e diretórios
const path = require('path');

// Resolvendo o caminho absoluto do arquivo 'tarefas.csv' com base no diretório atual
const filePath = path.resolve(__dirname, 'tarefas.csv');

// Definindo uma função assíncrona chamada 'buscarArquivo'
async function buscarArquivo() {
    // Usando um bloco try-catch-finally para lidar com possíveis erros e finalização
    try {
        // Usando 'await' para esperar a leitura do arquivo de forma assíncrona
        const arquivo = await fs.promises.readFile(filePath);
        // Convertendo o conteúdo do arquivo de um buffer para uma string usando a codificação 'utf8'
        const TextoDoArquivo = arquivo.toString('utf8');
        // Imprimindo o conteúdo do arquivo no console
        console.log(TextoDoArquivo);
    } catch (error) {
        // Capturando e imprimindo qualquer erro que ocorrer durante a leitura do arquivo
        console.log(error);
    } finally {
        // Este bloco é executado independentemente de ter ocorrido um erro ou não
        console.log('Finalizou!');
    }
}

// Chamando a função 'buscarArquivo' para iniciar o processo de leitura do arquivo
buscarArquivo();

/* 
### Explicação

1. **Importações e Configuração Inicial**:
   - `fs`: O módulo do Node.js para operações de sistema de arquivos, como leitura e escrita de arquivos.
   - `path`: O módulo do Node.js para manipulação de caminhos de arquivos e diretórios.
   - `filePath`: Calcula o caminho absoluto do arquivo 'tarefas.csv' usando `path.resolve(__dirname, 'tarefas.csv')`, garantindo que o caminho seja correto independentemente do diretório de execução.

2. **Função Assíncrona `buscarArquivo`**:
   - A função `buscarArquivo` é definida como `async`, permitindo o uso de `await` para operações assíncronas dentro dela.
   - `try-catch-finally`: Bloco usado para tratar possíveis erros (`catch`) e garantir que o bloco `finally` seja executado independentemente do resultado.

3. **Bloco `try`**:
   - `await fs.promises.readFile(filePath)`: Lê o conteúdo do arquivo `tarefas.csv` de forma assíncrona, retornando uma `Promise` que será resolvida com o conteúdo do arquivo.
   - `arquivo.toString('utf8')`: Converte o conteúdo do arquivo (um buffer) para uma string usando a codificação 'utf8'.
   - `console.log(TextoDoArquivo)`: Imprime o conteúdo do arquivo no console.

4. **Bloco `catch`**:
   - `console.log(error)`: Captura e imprime qualquer erro que ocorrer durante a leitura do arquivo.

5. **Bloco `finally`**:
   - `console.log('Finalizou!')`: Este bloco é executado após o `try` ou o `catch`, independentemente de ter ocorrido um erro ou não. Imprime uma mensagem indicando que o processo foi finalizado.

6. **Chamando `buscarArquivo`**:
   - `buscarArquivo()`: Inicia o processo de leitura do arquivo chamando a função assíncrona definida anteriormente.

### Resumo

Este código lê o conteúdo de um arquivo CSV (`tarefas.csv`) de forma assíncrona usando a API de promessas do Node.js. A função `buscarArquivo` utiliza `async` e `await` para tratar a operação de leitura do arquivo de forma clara e concisa, com um bloco `try-catch-finally` para lidar com possíveis erros e garantir a execução final do bloco `finally`. O conteúdo do arquivo é convertido para uma string e impresso no console. Se ocorrer um erro, ele é capturado e impresso, e uma mensagem final é exibida para indicar a conclusão do processo.
*/
