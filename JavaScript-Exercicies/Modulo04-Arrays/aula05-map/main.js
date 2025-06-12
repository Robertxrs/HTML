
// dobre os numeros
// const numeros = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];
// const numerosEmDobro = numeros.map(valor => valor*2);
// console.log(numerosEmDobro);

const pessoa = [
    {nome: 'Robert', idade: 19},
    {nome: 'Maria', idade: 26},
    {nome: 'Edu', idade: 28},
    {nome: 'Leticia', idade: 77},
    {nome: 'Cadu', idade: 52},
    {nome: 'Wallace', idade: 35},
];

// const nomes = pessoa.map(obj => obj.nome);
// console.log(nomes);

// const idade = pessoa.map(obj => ({idade: obj.idade}));
// console.log(idade);

const comIds = pessoa.map(function(obj, indice){
    // caso queira nao alterar o array original
    // const newobj = {...obj}
    obj.id = indice + 1;
    return obj;
});
console.log(comIds);