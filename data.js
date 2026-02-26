//Trabalhando com DATAS

const agora = new Date();


//console.log(agora.getFullYear());

//Data especifica

const nasci = new Date('1987-10-02T02:00:00.000Z');

console.log(`Formato BR: ${nasci.toLocaleDateString('pt-BR')} `);
console.log(`Formato US: ${nasci.toLocaleDateString('en-US')} `);