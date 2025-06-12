function escopo(){
    const result = document.querySelector('.container');
    const resultado = document.querySelector('.resultado');
    const pesos = document.querySelector('.pesos')


    function receberEventForm(event){
        event.preventDefault();

        const peso = Number(result.querySelector('#peso').value);
        const altura = Number(result.querySelector('#altura').value);
        const imc = peso / (altura * altura);

        if (!peso || !altura) {
            resultado.innerHTML = '<p>Informação incorreta! Digite apenas numeros</p>';
            return;
        }
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(1)}</p>`;       

        if(imc <= 18.4 && imc > 0){
            pesos.innerHTML += `<p>Seu peso esta Abaixo da media</p>`
        }else if(imc >= 18.5 && imc <= 24.9){
            pesos.innerHTML += `<p>Seu peso esta Normal</p>`
        }else if(imc >= 25 && imc <= 29.9){
            pesos.innerHTML += `<p>Seu peso esta em Sobrepeso</p>`
        }else if(imc >= 30 && imc <= 34.9){
            pesos.innerHTML += `<p>Seu peso esta em Obesidade grau 1</p>`
        }else if(imc >= 35 && imc <= 39.9){
            pesos.innerHTML += `<p>Seu peso esta em Obesidade grau 2</p>`
        }else if(imc >= 40 && imc <= 100){
            pesos.innerHTML += `<p>Seu peso esta em Obesidade grau 3</p>`
        }else{
            pesos.innerHTML = 'Informacao incorreta! Peso ou altura incorreta.'
        }    
        
    }
    result.addEventListener('submit', receberEventForm);
}
escopo();















