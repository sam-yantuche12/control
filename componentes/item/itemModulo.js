// itemModulo.js
export function item(title, image, price, description) {
    let itemDiv = document.createElement("div");
    itemDiv.className = "item";

    // Título
    let h3 = document.createElement("h3");
    h3.textContent = title;
    itemDiv.appendChild(h3);

    // Imagen
    let img = document.createElement("img");
    img.src = image;
    img.alt = title;
    itemDiv.appendChild(img);

    // Precio
    let pPrecio = document.createElement("p");
    pPrecio.textContent = "Precio: " + price;
    pPrecio.className = "precio";
    itemDiv.appendChild(pPrecio);

    // Descripción
    let pDesc = document.createElement("p");
    pDesc.textContent = description;
    itemDiv.appendChild(pDesc);

    // Evento click
    itemDiv.addEventListener("click", () => {
        itemDiv.classList.add("verde"); 
        let rHeader = document.querySelector(".header");
        if (rHeader) rHeader.classList.add("ocultar");
    });

    return itemDiv;
}
