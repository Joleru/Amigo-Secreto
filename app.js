let nombres = []

function agregarNombre() {
    let nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim();
    if (nombre === '') {
        alert('Debe ingresar un nombre')
        return

    }
    
    nombres.push(nombre)
    actualizarLista();
    nombreInput.value = '';
}


function actualizarLista() {
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = '';

    nombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    })
}


function sortear(){
    if (nombres.length === 0) {
        alert('La lista está vacía. Agrega nombres primero.');
        return
    }

    let amigoSecreto = Math.floor(Math.random() * nombres.length);
    let sorteoAmigoSecreto = nombres[amigoSecreto];

    document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: <strong>${sorteoAmigoSecreto}</strong></li>`;
}