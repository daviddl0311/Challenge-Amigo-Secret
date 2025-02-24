let textName = document.getElementById('amigo');
let list = document.getElementById("listaAmigos");
let result = document.getElementById("resultado");
let buttonAdd = document.getElementById("agregar");
let buttonSort = document.getElementById("sortear");

function agregarAmigo() {
    if(textName.value === "") {
        alert("Por favor ingresa un nombre");
        return;
    } else if (textName.value > 0 || textName.value < 0) {
        alert("Por favor ingresa un nombre válido");
        return;
    } else {
        let item = document.createElement("li");
        let uppercaseText = textName.value.charAt(0).toUpperCase() + textName.value.slice(1);
        item.textContent = uppercaseText;
        list.appendChild(item);
    }

    textName.value = "";
    textName.focus();
}   

function sortearAmigo() {
    let items = list.children;
    if(items.length === 1) {
        alert("Por favor agregar al menor 2 amigos");
        return;
    }
    let randomIndex = Math.floor(Math.random() * items.length);
    result.textContent = "¡Felicidades!, tu amigo secreto es: " + items[randomIndex].textContent;
    buttonAdd.disabled = true;
    sortear.disabled = true;
}