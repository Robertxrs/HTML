function Conta(agencia, conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
       console.log('saldo insuficiente '+ this.saldo);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} |`+`Saldo: R$ ${this.saldo.toFixed(2)}`);
}

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(20);
conta1.sacar(2);

function ContaCorrente(agencia, conta, saldo, limite){
    
}