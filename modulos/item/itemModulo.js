export function item(){
    
    let item = document.createElement("div");

    item.className = "item";

     // Crear imagen
  const imagen = document.createElement("img");
  imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtfQS1H6wuPAapBmY10rqFHs-TGkDViHWpA&s"; 
  imagen.alt = "Imagen";
  

  // Crear título
  const titulo = document.createElement("h3");
  titulo.innerText = "Computaciòn 2025";
  item.appendChild(titulo);

  // Crear descripción
  const descripcion = document.createElement("p");
  descripcion.innerText = "La noche estrellada es una pintura de Vincent van Gogh de 1889. Muestra un cielo nocturno lleno de movimiento y estrellas brillantes sobre un pueblo tranquilo. Es una de sus obras más famosas. ";
  
  item.appendChild(titulo);
  item.appendChild(imagen);
  item.appendChild(descripcion);

    return item;
}