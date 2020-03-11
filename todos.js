var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var nomes = JSON.parse(localStorage.getItem('list_nomes')) || [];

function renderList() {
    listElement.innerHTML = '';

    for (nome of nomes) {
        var nomeElement = document.createElement('li');
        var nomeText = document.createTextNode(nome);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = nomes.indexOf(nome);

        linkElement.setAttribute('onclick', 'deleteNome(' + pos + ')');
        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        nomeElement.appendChild(nomeText);
        nomeElement.appendChild(linkElement);

        listElement.appendChild(nomeElement);
    }
}

renderList();

function addNome() {
    var nomeText = inputElement.value;

    nomes.push(nomeText);
    inputElement.value = '';
    renderList();
    saveToStorage();
}

buttonElement.onclick = addNome;

function deleteNome(pos) {
    nomes.splice(pos, 1);
    renderList();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_nomes',JSON.stringify(nomes));
}