//semelhante a uma classe mas eh parecido com um json
/*
const pessoa1={
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25
};
*/
//factory
function criaPessoa(nome,sobrenome,idade){
    return{nome,sobrenome,idade,};
}
const pessoa1 = criaPessoa("luzis","morais",25);
console.log(pessoa1.idade);