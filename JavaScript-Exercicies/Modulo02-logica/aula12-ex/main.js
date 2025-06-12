// const maior = (x,y) => x > y ? x : y;
// console.log('O maior número é', maior(6, 7)); 


// const ePaisagem = (largura, altura) => largura > altura;
// console.log(ePaisagem(1080, 1920));

function FizzBuzz(numero) {
    if(typeof numero !== 'number')return numero;
    if(numero % 3 === 0 & numero % 5 === 0)return 'FIZZBUZZ';
    if(numero % 3 === 0)return 'FIZZ';
    if(numero % 5 === 0)return 'BUZZ';
    return numero;

  
}
for(let i = 0; i <= 100; i++){
   console.log(i,FizzBuzz(i));
}


