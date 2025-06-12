const timer = document.querySelector('.timer');
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let start;
let intervalo;


function startCronometro(){
  start = new Date();
  intervalo = setInterval(mostraTempo,1000); 
}


function mostraTempo(){
  let now = new Date();
  let timeCorrido = new Date(now - start);

  let hours = String(timeCorrido.getUTCHours()).padStart(2, '0');
  let minutes = String(timeCorrido.getUTCMinutes()).padStart(2, '0');
  let seconds = String(timeCorrido.getUTCSeconds()).padStart(2, '0');

  relogio.innerHTML = `${hours}:${minutes}:${seconds}`

}

function pausarCronometro(){
  clearInterval(intervalo);
  relogio.style.color = 'red';
}

function zerarCronometro(){
  clearInterval(intervalo);
  relogio.style.color = 'red';
  relogio.innerHTML = '00:00:00';
}

iniciar.addEventListener('click', function(event){
  startCronometro();
});

pausar.addEventListener('click', function(event){
  pausarCronometro();
});

zerar.addEventListener('click', function(event){
  zerarCronometro();
});
