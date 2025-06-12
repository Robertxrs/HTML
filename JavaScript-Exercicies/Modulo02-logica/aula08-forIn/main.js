// const frutas = ['pera','maca','uva'];

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

// for in le os indices ou chaves do objeto
for (let chave in pessoa){
    console.log(chave,pessoa[chave]);
}
