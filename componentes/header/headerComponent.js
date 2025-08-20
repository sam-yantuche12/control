export function header() {
  // Crear el elemento header
  const header = document.createElement("header");

  // Crear el título
  const titulo = document.createElement("h1");
  titulo.className = "titulo";
  titulo.innerText = "Sam";

  // Crear el div del logo
  const divLogo = document.createElement("div");
  divLogo.className = "div-logo";
  divLogo.innerText = "🪼"; 
  
  // Agregar los elementos al header
  header.appendChild(titulo);
  header.appendChild(divLogo);

  return header;
}


    