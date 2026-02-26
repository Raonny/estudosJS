//Pega as horas real
const horaAtual = new Date();
const hora = horaAtual.getHours();

//Exercicios 10
const produto = {
    preco: 50,
    quantidade: 10
}


console.log(produto.preco * produto.quantidade);

//-----------------------------------------------------------------------------
const pessoa = {
    nome: 'Julierme',
    idade: 47,
    profissao: 'PMMG',
    pets: ['shadow', 'Tor', 'Zeus'],
    saudacao(){
        let momento; 
        if(hora < 12){
            momento = 'um bom dia';
        } else if(hora < 18){
            momento = 'uma boa tarde'
        }else{
           momento = 'uma boa noite'
        }
         return console.log(`Oi, meu nome é ${this.nome}, tenha ${momento}.`)
    }
};

//pessoa.saudacao();

//Exercicios 09
for(const chave in pessoa){
    console.log(chave, pessoa[chave]);
}
const trabalhadores = [
    { nome: 'Ralf', idade: 18 },
    { nome: 'João', idade: 50 },
    { nome: 'Julierme', idade: 10 }
];

//Exercicios 07
/* for (const trabalhador of trabalhadores) {
    trabalhador.idade >= 18 ?
        console.log(`O ${trabalhador.nome} é maior de idade`) :
        console.log(`O ${trabalhador.nome} é menor de idade`)
} */

//Alerar o valor de uma chave no objeto
//pessoa.idade = 50;

//Adiciona um chave em um objeto, simplesmente crie ela

//pessoa.cidade = 'São Paulo';

//Deletando uma chave
//delete pessoa.profissao;
//console.log(pessoa);

//const concatenacao = (pessoa) => {
//  return console.log(` O ${pessoa.nome} tem ${pessoa.//idade} anos de idade e trabalha como ${pessoa.profissao}`);
//}
//concatenacao(pessoa);


