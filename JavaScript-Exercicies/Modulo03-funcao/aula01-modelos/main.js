//Declaracao de funcao (function hoisting)
falaOi();

function falaOi(){
    console.log('oie');
}

//First-class objects (Objetos de priemira classe)
//Funcion expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow funcition');
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();