
// Lista de amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let resultado = amigos[indice];

    document.getElementById("resultado").innerHTML = "🎉 Amigo sorteado: " + resultado;
}
