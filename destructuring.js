const pessoa = {
    nome: 'Jadson',
    idade: 30
};

const {nome, idade} = pessoa; // DESTRUCTURING PARA ACESSAR DIRETO PELO NOME

console.log(nome);
console.log(idade);

saudacao(nome, idade);

function saudacao(nome, idade) {
    console.log('olá, ', nome, idade);
};

//// DESTRUCTURING COM ARRAY

const frutas = ['Banana', 'Maça', 'Uva'];

const [primeira, segunda] = frutas;

console.log(primeira, segunda);