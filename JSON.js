//JSON
let respostaJSON = '{"nome": "Raonny", "idade": 40, "profissão": "PMMT"}';

//Transformando para objeto
let objeto = JSON.parse(respostaJSON);

//console.log(objeto);

//transformar um objeto em texto JSON

const pessoa = {
    nome: 'Julierme',
    idade: 47,
    profissao: 'PMMG'
}

let json = JSON.stringify(pessoa);

console.log(typeof(json));