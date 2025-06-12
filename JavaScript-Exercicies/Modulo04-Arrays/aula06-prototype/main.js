// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
// }

// Pessoa.prototype.nomeCompleto = function() {
//     return this.nome + ' ' + this.sobrenome; 
// };

// const pessoa1 = new Pessoa('jorge' ,'matiaz');

// console.log(pessoa1.nomeCompleto());

//farei um prototype desse obj ser outro obj
const objA = {
    chaveA: 'a'
};
const objB = {
    chaveB: 'b'
};
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);