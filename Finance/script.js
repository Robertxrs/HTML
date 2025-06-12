const menuLateral = document.querySelector('.menu-lateral');
const btnExpandir = document.querySelector('.btn-expandir');

function opaco() {
    return {
        expandir: document.querySelector('.btn-expandir'),

        inicia() {
            this.pressionaBotao();
        },

        pressionaBotao() {
            this.expandir.addEventListener('click', () => {
                menuLateral.classList.toggle('expandido');
            });
        },
    }
}
const ex = opaco();
ex.inicia();
