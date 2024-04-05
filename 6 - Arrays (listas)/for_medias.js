

const notas =[];

notas.push(5);
notas.push(7);
notas.push(8);
//notas.push(2);
notas.push(5);
notas.push(8);

let soma =0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma=soma +nota;
}

const media = soma/notas.length;
console.log(media);


// --> nesse caso, não preciso informar manualmente por quanto a nota será dividida, ele ja pegar o numero total de itens do array atras do notas.lenght que representa o tamanho do array, se tornando uma média genérica e dinâmica;