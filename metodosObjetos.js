const pessoa = {
    nome: 'Julio',
    idade: 36,
    pets: ['papagaio', 'cachorro'],
    temCNH: true,
    filho: {
        nomeFilho: 'Ricardo',
        idadeFilho: 12,
        forte: true,
        petsFilho: {
            nomePet: 'Shadow',
            idadePet: 2,
            saudavel: true
        }
    } 
}


//console.log('teste de Obejtos: ', pessoa.filho.petsFilho.nomePet);

//Função for-in para percorrer o objeto
for(const chave in pessoa){
    //console.log('Chave: ', chave);
    //console.log('Valor: ', pessoa[chave]);
}

//Metodo Object para pegar chaves e valores do array

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log(entradas);
