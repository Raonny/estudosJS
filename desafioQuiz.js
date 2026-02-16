const readline = require('readline');
const { isArrayBuffer } = require('util/types');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

leitor.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (questao1) => {
    if (questao1 == 'b') {
        acertos++;
        console.log('Acertou Miseravi\n');
    } else {
        console.log('Resposta errada!\n');
    }

    leitor.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ', (questao2) => {
        if (questao2 == 'c') {
            acertos++;
            console.log('Acertou Miseravi\n');
        } else {
            console.log('Resposta errada!\n');

        }
        leitor.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>', (questao3) => {
            if (questao3 == 'c') {
                acertos++
                console.log('Acertou Miseravi\n');
            } else {
                console.log('Resposta errada!\n');
            }

            if (acertos >= 3) {
                console.log(`Você acertou ${acertos} questões, nota máxima!`);
            } else if(acertos == 2){
                console.log(`Você acertou ${acertos} questões, nota média!`);
            }else{
                console.log(`Você acertou ${acertos} questão, reprovado!`);
            }
            leitor.close();
        });
    });

});

