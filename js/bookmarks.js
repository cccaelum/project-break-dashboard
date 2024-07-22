const linksContainer = document.getElementById('links-container'),
    nameInput = document.getElementById('name-input'),
    urlInput = document.getElementById('url-input'),
    addLinkBtn = document.getElementById('add-link-btn');
let links = JSON.parse(localStorage.getItem('links')) || [];

// funcion para crear links en el DOM a la vez que se guardan en el LocalStorage
const addLink = () => {
    // Validar que ambos inputs tengan valores
    if (nameInput.value === '' || urlInput.value === '') {
        return; // Salir de la función si los campos están vacíos
    }

    const link = {
        id: Date.now(), // generar un ID único basado en el timestamp
        name: nameInput.value,
        url: urlInput.value
    };

    links.push(link); // añadir el nuevo link a la lista de links
    localStorage.setItem('links', JSON.stringify(links)); // guardar la lista actualizada en el LocalStorage

    const template = `
    <li class="link" id="${link.id}">
    <a href="${link.url}" target="_blank">${link.name}</a>
    <button class="delete" onclick="deleteLink(${link.id})">X</button>
    </li>
    `
    linksContainer.innerHTML += template

    // Limpiar los campos de entrada después de agregar el enlace
    nameInput.value = '';
    urlInput.value = '';
}

// funcion para recuperar links del LocalStorage al recargar pagina
const retrieveLinks = () => {
    links.forEach(link => {
        const template = `
        <li class="link" id="${link.id}">
            <a href="${link.url}" target="_blank">${link.name}</a>
            <button class="delete" onclick="deleteLink(${link.id})">X</button> 
        </li>`; 

        linksContainer.innerHTML += template;
    })
}

// funcion para borrar links del DOM y del LocalStorage
const deleteLink = (id) => {
    // filtrar el enlace a eliminar de la lista de enlaces
    links = links.filter(link => link.id !== id);
    localStorage.setItem('links', JSON.stringify(links)); // actualizar el LocalStorage

    // eliminar el enlace del DOM
    document.getElementById(id).remove();
}

addLinkBtn.addEventListener('click', addLink);

window.addEventListener('load', retrieveLinks);

