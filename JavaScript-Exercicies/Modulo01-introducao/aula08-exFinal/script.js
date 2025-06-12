
function escopo() {
    const form = document.querySelector('.formulario'); // Corrigido para '.formulario'
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(event) {
        event.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        // Corrigido para exibir corretamente os valores no resultado
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} - Peso: ${peso.value} kg - Altura: ${altura.value} m</p>`;

        // Limpa os campos do formulário após submissão
        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';
    }

    form.addEventListener('submit', recebeEventoForm);
}

escopo();