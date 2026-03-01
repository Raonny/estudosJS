//codigo base para criar uma interface para pegar dados com o usuario
const readline = require('node:readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pergunta = 'Quem é o super heroi mais forte? \n(a) Super Man\n(b) Capitão Incrivel\n(c) Tanos\n Resposta: ';
const respostaCorreta = 'b';



function fazerPergunta(pergunta, respostaCorreta) {

    leitor.question(pergunta, (resposta) => {
        resposta == respostaCorreta ? console.log('Resposta correta! ') : console.log('Você errou');
       leitor.close();
    });

}

fazerPergunta(pergunta, respostaCorreta)