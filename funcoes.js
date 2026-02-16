 //HOF --> Higher-Order Function === função que recebe outra função como parametro

 function calcular(numero1, numero2, operacao){ //operação é uma função
    return operacao(numero1, numero2)
 }

 function soma(n1, n2){
    return n1 + n2
 }

 const resulSoma = calcular(3, 8, soma)// Soma é um Callback
 console.log(resulSoma)