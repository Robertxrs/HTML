const pessoa = {
    nome: 'Robert',
    sobrenome: 'Rocha dos Santos',
    iadde: 17,
    endereco:{
        rua: 'Rua santa',
        numero: 104
    }
};


// ...rest pega o resto tipo const{nome, ...rest}=pessoa
const{endereco: {rua: r,numero},endereco}=pessoa;
console.log(r,numero,endereco);