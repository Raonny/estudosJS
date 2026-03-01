//const readline = require('readline');
import {createInterface} from 'readline'
import { somar, subtrair, multiplicar, dividir } from './operacoesMatematicas.js'
const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

//>>>>>>>>>>>>>>>>>>>TERMINAR AS OUTRAS FUNÇÕES COMO FORMA DE EXERCICIO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

leitor.question('Digite um numero \n', (numero1) => {
    leitor.question('Digite a operação\n+ Soma\n- Subtrair\n* Multiplicação\n/ Divisão\n', (operacao) => {
        leitor.question('Digite o segundo numero \n', (numero2) => {
            const num1 = Number(numero1); //Conversão de String para Numero
            const num2 = Number(numero2);
            let resultado = null;

            switch (operacao) {
                case '+':
                    resultado = somar(num1, num2);
                    break;
                case '-':
                    resultado = subtrair(num1, num2);
                    break;
                case '*':
                    resultado = multiplicar(num1, num2);
                    break;
                case '/':
                    resultado = dividir(num1, num2);
                    break;    
                default:
                    throw new Error('Operação Inválida');
            }
            resultado != null ? console.log(`O resultado da sua operação é: ${resultado}`) : console.log('Erro');
            leitor.close();
        });
    });
});