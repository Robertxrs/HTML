function Calculadora(){
  this.display = document.querySelector('.display');

this.capturaCliques = () => {
  document.addEventListener('click', event =>{
    const element = event.target;
    if(element.classList.contains('btn-num')) this.addNumDisplay(element); 
  });
};

this.addNumDisplay = el => this.display.value += element.innerText;

  this.inicia = () => {
    this.capturaCliques();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();