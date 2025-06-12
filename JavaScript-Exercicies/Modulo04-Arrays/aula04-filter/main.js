// mais importantes
// Filter, -> Sempre retornar um array, com a mesma quantirade de elementos ou menos.
// map, reduce 
// Retorne os numeros maiores que 10

// const numeros = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];
// const numberFilter = numeros.filter(valor =>valor > 10);
// console.log(numberFilter);




// Retorne as pesoas que tem o nome com 5 letras ou mais
// retirne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome termina com a
const pessoa = [
    {nome: 'Robert', idade: 19},
    {nome: 'Maria', idade: 26},
    {nome: 'Edu', idade: 28},
    {nome: 'Leticia', idade: 77},
    {nome: 'Cadu', idade: 52},
    {nome: 'Wallace', idade: 35},
];
// const pessoasCincoLetras = pessoa.filter(obj => obj.nome.length >= 5);
// const idadeMaiorCinquenta = pessoa.filter(obj => obj.idade > 30);
const pessoasLetraFinalA = pessoa.filter(obj => obj.nome.slice(-1).toLowerCase === 'a');
console.log(pessoasLetraFinalA);