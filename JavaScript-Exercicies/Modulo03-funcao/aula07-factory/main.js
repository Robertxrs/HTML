// Factory function(Funcao fabrica)
function criaPessoa(nome, sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            
        },
        
        fala(assunto = 'Sobre NADA'){
            return `${this.nome} esta falando ${assunto}`
        },
        altura,
        peso,

        get imc(){
            const indice = this.peso /(this.altura ** 2);
            return indice.toFixed(2);
        }
   };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.fala('sobre JS'));