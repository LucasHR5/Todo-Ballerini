function adicionarTarefa() {

    let mensagem = "tarefa adicionada com sucesso!";

    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim() //o trim() é para evitar espaços em branco

    if (tarefa === "") {
        document.getElementById("mensagem").textContent = "Não é possível adicionar uma tarefa vazia!"
        return;
    }

    document.getElementById("mensagem").textContent = mensagem;

    let novaTarefa = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"

    checkbox.addEventListener("change", function () {
        novaTarefa.style.textDecoration = this.checked ? "line-through" : "none";
    });

    let textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa;

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(textoTarefa)

    listaTarefas.appendChild(novaTarefa)

    inputTarefa.value = "";
}