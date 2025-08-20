// itemModulo.js
export function item(titulo, urlImg, precio, descripcion) {
    let itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Título
    let h3 = document.createElement("h3");
    h3.textContent = titulo;
    itemDiv.appendChild(h3);

    // Imagen
    let img = document.createElement("img");
    img.src = urlImg;
    img.alt = titulo;
    itemDiv.appendChild(img);

    // Precio
    let pPrecio = document.createElement("p");
    pPrecio.textContent = "Precio: $" + precio;
    itemDiv.appendChild(pPrecio);

    // Descripción
    let pDesc = document.createElement("p");
    pDesc.textContent = descripcion;
    itemDiv.appendChild(pDesc);

    // Evento click
    itemDiv.addEventListener("click", () => {
        itemDiv.classList.add("verde"); // agrega la clase verde
        let rHeader = document.querySelector(".header");
        if (rHeader) rHeader.classList.add("ocultar");
    });

    return itemDiv;
}
