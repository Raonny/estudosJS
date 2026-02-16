const readline =  require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome)=> {
    console.log('Olá, ', nome)
    console.log('Boas vindas ao nosso sitema')

    leitor.question('Qual sua idade? ', (idade) => {
        if(idade >= 18){
            console.log("Parabéns você pode tirar a CNH!")
        }
        else{
            console.log('Você não pode dirigir')
        }
        leitor.close()
    });

    
});