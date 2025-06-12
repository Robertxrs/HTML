// function funcao(){
//     console.log(arguments[0]);

// }
// funcao('Valor',1,2,3,4,5,6,7,8,9,10);

//bizarro
// argumentos que sustenta todos os argumentos enviados nao precisando de
// paramentros
// function funcao(){
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1,2,3,4,5,6,7,8,9,10);

// function funcao(a, b= 2, c=4){
//     console.log(a+b+c);
// }
// funcao(2,undefined,20);

// ... eh o resto, todos o resto dos paramentos vai pra ele
//  ao um array
const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20,30,40,50,60)