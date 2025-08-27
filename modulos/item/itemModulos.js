import { listaDeCompras } from "../../dataBases/carrito";

// itemModulo.js
export function item(title, image, precio, description) {
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
    itemDiv.appendChild(image);

    // Precio
    let pPrecio = document.createElement("p");
    pPrecio.textContent = "Precio: $" + precio;
    itemDiv.appendChild(pPrecio);

    // Descripción
    let pDesc = document.createElement("p");
    pDesc.textContent = description;
    itemDiv.appendChild(pDesc);

    // Evento click
    itemDiv.addEventListener("click", () => {
        listaDeCompras.push("comat")
        console.log(listaDeCompras.length);
        consoç.log(listaDeCompras)
    });

    return item;
}