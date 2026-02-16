//codigo base para criar uma interface para pegar dados com o usuario
const readline = require('node:readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//function fazerPergunta(pergunta, respotaCorreta)
let total= 0;
leitor.question('Digite um numero para ser somado ', (num1) => {
    
    leitor.question('Digite outro numero? ', (num2) => {
       console.log(typeof(num1), typeof(num2))
        soma(num1, num2);
        leitor.close();
    });
});

const soma =  (num1, num2) =>{
    return console.log(`A soma dos dois numeros é: ${Number(num1) + Number(num2)}`);
}

