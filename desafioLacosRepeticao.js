//contar quantos numeros pares e quantos numeros impare temos entre 0 e 100

let num = 1
let impar = 0
let par = 0
let multiplo3 = 0

while(num <= 100){

    //num % 3 == 0 ? par++ : impar++
    if(num % 3 ==0){
        multiplo3++
    }
    
    num++
}
//console.log('Existem ', multiplo3, 'multiplos de 3 entre 1 e 100.' )
//console.log('Após a análise temos ', par, ' numeros pares e ', impar , ' numero impares!')


let i = 0; 

for (;  i < 5; i++) { 

//console.log(i); 

} 

// Resultado: 0, 1, 2, 3, 4 

//FOR COM MULTIPLAS VARIAVEIS

for(let i = 0, x = 10, y = 0, z = 12 ; i < x || y < z; i++, x--, y++, z--){

    console.log(`i: ${i}, x: ${x}, y: ${y}, z: ${z}`)

}