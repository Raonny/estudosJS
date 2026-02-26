const frutas = ['Maça', 'Banana', 'Goiaba'];

const maisFrutas =  ['Uva', 'limão', 'kiwi'];

const clone = [...frutas];
frutas.push('Manga');
const cloneTotal = [...frutas, ...maisFrutas];// spread operator


/* console.log(frutas, '\n');

console.log(maisFrutas, '\n');
console.log(clone, '\n');

console.log(cloneTotal, '\n');
 */
//REST operator

const [primeira, ...rest] = cloneTotal;
console.log(primeira, '\n');

//console.log(segunda, '\n');
console.log(rest, '\n');