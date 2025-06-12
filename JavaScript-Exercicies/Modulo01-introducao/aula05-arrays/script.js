const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const dois = 2;

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero  +2 eh ${numero + 2}.</p>`;

