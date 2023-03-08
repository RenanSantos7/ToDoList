var itens = document.getElementsByClassName("item");
var novaTarefa = document.getElementById("novaTarefa");
var adNovaTarefa = document.getElementById("addTarefa");
var lista = document.getElementById("lista");

for (var i = 0; i < itens.length; i++) {
    var item = itens[i];
    var tarefaOk = false;

    item.addEventListener("click",function(){
        if (!tarefaOk) {
            this.classList.add("completa");
            tarefaOk = true;
        } else {
            this.classList.remove("completa");
            tarefaOk = false;
        }
    });
};

function montaLi(texto) {
    let li = document.createElement("li");
    let labelCheck = document.createElement("label");
    let inputCheck = document.createElement("input");
    let labelText = "Tarefa";

    li.classList.add("item-lista");
    labelCheck.classList.add("item");
    inputCheck.classList.add("check");

    //inputCheck.type = "checkbox";
    inputCheck.setAttribute('type','checkbox');
    
    labelCheck.appendChild(inputCheck);
    labelCheck.appendChild(labelText);
    labelText.innerHTML = texto;
    li.appendChild(labelCheck);

    return li
}

adNovaTarefa.addEventListener("click",function(event){
    event.preventDefault();

    let tarefa = novaTarefa.value;

    lista.appendChild(montaLi(tarefa));
});