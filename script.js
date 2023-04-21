const lista = document.getElementById("lista");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");

let dados = {};

const renderizaLista = (lista, poke) => {
    lista.innerHTML = "";
    poke.forEach((pokemon) => {
        const itemText = document.createTextNode(
            `${pokemon.name} (${pokemon.url})`
        );
        const listItem = document.createElement("li");
        listItem.appendChild(itemText);
        lista.appendChild(listItem);
    });
};

const getPekemon = (url) => {
    console.log("antes do fetch");
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            dados = data;
            btAnterior.disabled = !dados.previous;
            btProxima.disabled = !dados.next;
            console.log("qtd pokemon = " + data.count);
            renderizaLista(lista, data.results);
        });
    console.log("após o fetch");
};

const handleBtAnteriorClick = () => {
    getPekemon(dados.previous);
};

const handleBtProximaClick = () => {
    getPekemon(dados.next);
};

getPekemon("https://pokeapi.co/api/v2/pokemon/");

btAnterior.onclick = handleBtAnteriorClick;
btProxima.onclick = handleBtProximaClick; 