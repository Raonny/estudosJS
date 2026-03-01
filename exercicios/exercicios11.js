const pessoa = {
    nome: 'Juditi',
    idade: '30',
    email: 'juditi@gmail.com'
};


// Exercício 10

// Exercício 09

// Exercício 08

// Exercício 07
const data = new Date();

console.log(`Hoje é: ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}.`);
;

// Exercício 06
const saudacao = (nome = 'Default') => {
    console.log(`Olá, ${nome}.`);
};  

//saudacao();

// Exercício 05
const teste1 = {
    nome: 'Ryanderson'
};

const teste2  = {
    idade: 23
};

const Receptor = {
    ...teste1,
    ...teste2,
};

//console.log(Receptor);

// Exercício 04
let frutas1 = ['Banana', 'Maça', 'Uva'];
let frutas2 = ['Limão', 'Laranja', 'Acerola'];

let cestaFrutas = [...frutas1, ...frutas2];

//console.log(cestaFrutas);

// Exercício 03

const somador = (...numeros)  => {
    let total = 0;
    for (const numero of numeros){
            total += numero;
    }
    return total;
};


//console.log(`O total da compra é: ${somador(10,20,30,40,50)}`);


// Exercício 02
const linguagens = ['C', 'Java', "JS"];

const [ling1, ling2, ling3] = linguagens;

//console.log(ling1, ling2, ling3);
// Exercício 01
const {nome, email} = pessoa;

//console.log(nome, email);