//um exemplinho do que eh escopo iexico que explica uma cadeia ou 
// tipo uma cascata de funcaoes
const nome = 'Luiz';

function falaNome(){

    console.log(nome);
}

function usaFalaNome(){
    falaNome();
}
usaFalaNome();