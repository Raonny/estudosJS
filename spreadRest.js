let pessoa = {
    nome: 'Felix',
    idade: 30,
    profissao: 'garoto de programa'
};

const pessoa2 = {...pessoa}; //Spread operator, clonador

pessoa2.idade = 25;

console.log(pessoa);
console.log(pessoa2);

pessoa = {
    ...pessoa2,
    profissao: 'Desenvolvedor',
    sexo: 'Masculino'
};

console.log(pessoa);

const {nome, ...restante} = pessoa; //Rest operator

console.log(nome);
console.log(restante);

