import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponents.js";

function seccion() {
    let seccion = document.createElement("section");
    
    // header
    seccion.appendChild(header());
    
    // seccion 1
    seccion.appendChild(seccion1());
    
    

    return seccion;
}

document.body.appendChild(seccion());
