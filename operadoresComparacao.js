const idadeUm = 36
const idadeDois = 36
const idadeTres = 16
const idadeQuatro = 10

const saoiguais = idadeUm != idadeDois

//console.log(saoiguais)

// ===, !== compara até o tipo na variavel
//Todos os sinais de comparação
// == , < , > , <= , >= , !=

// AND --> &&, OR --> ||, NOT --> ! --> !true e !false
let comparacao3e4 = idadeTres == idadeQuatro

let resultado = idadeUm == idadeDois && !comparacao3e4

console.log("O rersultado é: " + resultado)

let contador = 5;
console.log(contador++); // imprime 6, pois a variável é incrementada antes da impressão
console.log(contador);