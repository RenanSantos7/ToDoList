const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
const listaTarefa = document.querySelector("#lista-tarefas")
const btAddTarefa = document.querySelector("#btaddtarefa")
const txtNovaTarefa = document.querySelector("#txtnovatarefa")

tarefas.forEach(tarefa => {
    criaElemento(tarefa.texto)
})

btAddTarefa.addEventListener("click", (event) => {
    event.preventDefault()
    criaNovaTarefa()
})

txtNovaTarefa.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        criaNovaTarefa()
    }
})

function criaNovaTarefa() {
    if (txtNovaTarefa.value != "") {
        const novaTarefa = {
            "checked": false,
            "texto": txtNovaTarefa.value
        }

        tarefas.push(novaTarefa)

        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        criaElemento(novaTarefa.texto)
    } 

    txtNovaTarefa.value = ""
}

function criaElemento(texto) {
    const check = document.createElement("input")
    check.type = "checkbox"
    check.classList.add("check")

    const nomeTarefa = document.createElement("span")
    nomeTarefa.classList.add("nome-tarefa")
    nomeTarefa.innerHTML = texto

    const label = document.createElement("label")
    label.appendChild(check)
    label.appendChild(nomeTarefa)

    const artigo = document.createElement("article")
    artigo.classList.add("tarefa")
    artigo.appendChild(label)

    listaTarefa.appendChild(artigo)
}

