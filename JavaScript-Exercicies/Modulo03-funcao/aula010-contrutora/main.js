// funcao construtora -> objetos
// funcao fabrica -> objetos
// Contrutora -> Pessoa(new)

function Pessoa(nome, sobrenome){
    // Atributos ou metodos privados
    const ID = 123456;   
    const metodoInterno = function(){

    };
    
    
    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ": sou um metodo");
    }


}

const p1 = new Pessoa('jorge','Rodrigues');
const p2 = new Pessoa('Henrique','Martins');

console.log(p1)