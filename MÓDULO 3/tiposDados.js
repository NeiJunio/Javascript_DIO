/*
    boolean -> true or false

    null -> ausência de valor, mas declarado

    undefined -> inexistencia de definição (não existe)

    number -> numero (também tem o +Infinity, -Infinity e NaN) - Double Precision 64-bit binary format IEEE 754 (https://0.30000000000000004.com)

    string -> caracteres - representado por "", '' e `usado pra concatenar`
        const id = 10;
    
        console.log("<div id=\"10\">teste</div>");
        console.log('<div id="10">teste</div>');
        console.log(`<div id="${id}">teste</div>`);


    Symbol - objeto imutável único

        const x  = Symbol('10');
        const x  = Symbol('10');

        console.log(x === x); // false
*/

//object - coleção dinâmica de chaves e valores

    const x = {
        nome: 'Nei',
        idade: 20
    // chave: valor
    };

    console.log(x.nome);
    console.log(x.['nome']);

