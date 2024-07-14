// Importando o módulo 'fs' para trabalhar com o sistema de arquivos
const fs = require('fs');

// Importando o módulo 'path' para trabalhar com caminhos de arquivos e diretórios
const path = require('path');

// Resolvendo o caminho absoluto do arquivo 'tarefas.csv' com base no diretório atual
const filePath = path.resolve(__dirname, 'tarefas.csv');

// Usando a API de promessas do módulo 'fs' para ler o arquivo
const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath);

// Manipulando a promessa retornada pela leitura do arquivo
promessaDaLeituraDoArquivo
    // Primeiro then() é chamado quando a promessa é resolvida com sucesso
    .then((arquivo) => arquivo.toString('utf8')) // Convertendo o conteúdo do arquivo para string usando a codificação 'utf8'
    // Segundo then() é chamado após a conversão para string
    .then((texto) => {
        // Dividindo o texto do arquivo em linhas com base no caractere '\n' (nova linha)
        const linhas = texto.split('\n');
        // Removendo a primeira linha (cabeçalho) e imprimindo as demais linhas
        console.log(linhas.slice(1));
    })
    // catch() é chamado quando ocorre um erro durante a leitura do arquivo
    .catch((error) => {
        // Imprimindo uma mensagem de erro no console
        console.log('Deu ruim!', error);
    });

/* 
### Explicação

1. **Importações e Configuração Inicial**:
   - `fs`: O módulo do Node.js para operações de sistema de arquivos, como leitura e escrita de arquivos.
   - `path`: O módulo do Node.js para manipulação de caminhos de arquivos e diretórios.
   - `filePath`: Calcula o caminho absoluto do arquivo 'tarefas.csv' usando `path.resolve(__dirname, 'tarefas.csv')`, garantindo que o caminho seja correto independentemente do diretório de execução.

2. **Leitura do Arquivo**:
   - `fs.promises.readFile(filePath)`: Lê o conteúdo do arquivo `tarefas.csv` de forma assíncrona, retornando uma `Promise` que será resolvida com o conteúdo do arquivo ou rejeitada com um erro.

3. **Manipulação da Promessa**:
   - Primeiro `then()`: Recebe o conteúdo do arquivo como um buffer, que é então convertido para uma string usando a codificação 'utf8'.
   - Segundo `then()`: Recebe o texto do arquivo, divide-o em linhas usando `split('\n')` e remove a primeira linha (cabeçalho) usando `slice(1)`. As linhas restantes são impressas no console.
   - `catch()`: Se ocorrer um erro durante a leitura do arquivo, uma mensagem de erro é impressa no console com `console.log('Deu ruim!', error)`.

### Resumo

Este código lê o conteúdo de um arquivo CSV (`tarefas.csv`) de forma assíncrona, converte o conteúdo para uma string, processa o texto para remover o cabeçalho e imprime as linhas restantes no console. Ele utiliza promessas para lidar com operações assíncronas, garantindo que o código continue a ser executado de maneira não bloqueante. Se ocorrer um erro durante a leitura do arquivo, o erro é tratado e uma mensagem é impressa no console.
*/

