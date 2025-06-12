const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "apagar esta tarefa");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput, salvar = true) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  if (salvar) salvarTarefa();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefa();
  }
});

function salvarTarefa() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  if (tarefas) {
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas) {
      criaTarefa(tarefa, false);
    }
  }
}

adicionaTarefasSalvas();
