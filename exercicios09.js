//Exercicio 10
const tarefas = [' Treinar', ' Atirar', ' Limpar', ' Ouvir', ' Assitir'];
const feitas = [true, false, true, false, true];

let pendentes = tarefas.filter((tarefas, i) => feitas[i] == false);

console.log(`Tarefas pedentes: ${pendentes}`);

/* //Exercicio 09
let precos = [5.40, 6.99, 8.78, 12.50, 14, 20.55,50];

let somaTotal = 0;

for(let preco of precos){
    somaTotal = somaTotal + preco;
}
console.log(`Valor total da compra: ${somaTotal}`);
let valorDescontado = somaTotal * 0.8;
console.log(`Valor com desconto: ${valorDescontado}`); */
//Exercicio 08
/* let idades = [5, 68, 8, 12, 14, 20];

let filtro = idades.filter(elemento =>{
    return elemento >= 18;
});

console.log(filtro); */

//Exercicio 07
/* let precos = [5, 6, 8, 12, 14, 20];
console.log(precos);
let precosDescontados = precos.map(numero =>{
    return numero * 0.9;
});

console.log(precosDescontados); */
//Exercicio 06
/* let usuarios = ['Raonny', 'Daiana', 'Borges', 'Mendes', 'Moreira']

usuarios.forEach((nome, i) =>{
    console.log('olá, ', nome);
}); */

//Exercicio 05
/* let notas = [5, 6, 8, 10, 0,10,10];
let soma = 0;
let quantNotas = 0;
notas.forEach((valor, i) => {
    soma = soma + valor;
    quantNotas = i;
});

const media = (somaNotas, quantNotas) => {
    return somaNotas / quantNotas
}

let notaMedia = media(soma, quantNotas+1);

 notaMedia >= 7 ? console.log(`Sua Media foi: ${notaMedia} vc foi APROVADO!`) : console.log(`Sua Media foi: ${notaMedia} vc foi REPROVADO!`);
 */

//Exercicio 04
/* let numeros = [1,2,3,400,5,6,7,8,9,10];
let soma = 0;
numeros.forEach((valor, i) => {
    //console.log('indice: ', i, valor);
    return soma = soma + valor;
}); 
console.log('Total de numeros no array: ', soma) */

//Exercicio 03
//let nomes = ['Raonny', 'Daiana', 'Borges', 'Mendes', 'Moreira', 'Souza', 'Silva', 'Santos', 'juca', 'Daniel'];

//console.log('Neste array esxiste: ', nomes.length, 'itens!');




//Exercicio 02
/* let frutas = ['Laranja', 'Maça', 'Uva', 'Limão', 'Banana']; 

for (let i1=0; i1 < frutas.length; i1++){
    console.log('Nome: ', frutas[i1]);
}

console.log('--------ADIÇÃO DE ITEM NO ARRAY----------')

frutas.push('Abacate');
for(let i2=0; i2 < frutas.length; i2++){
    console.log(frutas[i2]);
}

console.log('--------REMOÇÃO DE ITEM DO ARRAY----------')

frutas.shift(0);
for(let i3=0; i3 < frutas.length; i3++){
    console.log(frutas[i3]);
} */