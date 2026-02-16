console.log('-----Bem vindo ao desafio-----')

let valorCompra = 17.50
let valorPago = 20


let troco = valorPago - valorCompra

//console.log('O seu troco é: R$' + troco.toLocaleString('pt-br'))

let idade = 15

//console.log(idade <= 18)

const valor = 12025
let porcentagem = 15  

const resultado = valor * (porcentagem /100)

//console.log('15% de 120 é igual a ' + resultado)

//-------------------------Exercício 10 aula 06 ------------------------------------

// Usando Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados obtidos');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Usando Async/Await
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData(); 