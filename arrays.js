const nomes = [ 'raonny', 'Souza', 'Moreira', 'Daiana'];

/* console.log(nomes[1]);
console.log(nomes.length);
console.log(nomes[nomes.length - 1]) */

console.log(nomes);

//Remove item dentro de um Array

nomes.splice(2, 1);

console.log(nomes);

/* for(let cont = 0; cont < nomes.length; cont++ ){
    console.log(nomes[cont]);
}; */


// FOREACH
nomes.forEach((valor, indice) => {
    console.log('indice: ', indice, valor)
});

//FOR OF --> melhor e mais moderno

for(const nome of nomes){
    console.log(nome);
}