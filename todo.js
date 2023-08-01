// % ADICIONAR TAREFAS

var inputTexto = document.querySelector("#txtnovatarefa");
const btnTarefa = document.querySelector("#btaddtarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

btnTarefa.addEventListener("click", (event) => {
    event.preventDefault();
    addNovaTarefa(inputTexto.value);
    inputTexto.value = '';
});

window.addEventListener("keydown", (event) => {
    console.log("Keypress")
    // ⬇️ Verificar se o usuário pressionou Alt e X
    if (event.altKey && event.code === "KeyN") {
        console.log("Alt+N pressionado")
        addNovaTarefa(inputTexto.value);
        inputTexto.value = '';
    }
});

function addNovaTarefa(texto) {
    //antierro
    if (texto != '') {
        // criar input check
        let check = document.createElement('input')
        check.type = "checkbox"
        check.classList.add('check')

        // criar label
        let label = document.createElement('label')
        label.classList.add('nomeTarefa')
        label.appendChild(check)
        label.innerHTML += texto

        // criar article
        let artigo = document.createElement('article')
        artigo.classList.add('tarefa')
        artigo.appendChild(label)

        // colocar tarefa dentro da lista de tarefas
        listaTarefas.appendChild(artigo)
    }
}

//% OCULTAR TAREFAS CONCLUÍDAS
