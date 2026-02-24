const pessoa = {
    nome: 'Raonny',
    sobrenome: 'Souza',
    idade: '36',
    temCNH: true
}

const autor = {
    nome: 'J.R.R. Tolkien',
    idade: 98
}

const livro = {
    titulo: 'O Hobbit',
    paginas: 310,
    ...autor //spread Operator
} 

livro.publicado = true;
livro.idiomas = 'Inglês, Português';

//console.log(livro);

delete livro.paginas;

const sobreno = 'sobrenome';
console.log(pessoa[sobreno]);