function modoEscuro() {
  return {
    escuro: document.querySelector('.button'),

    inicia() {
      this.pressionaBotao();
    },

    pressionaBotao() {
      this.escuro.addEventListener('click', () => {
        document.body.classList.toggle('modo-escuro');
      });
    },
  }
}

const modo = modoEscuro();
modo.inicia();
