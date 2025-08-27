import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponents.js";
import { navComponent } from "./componentes/nav/navComponent.js";

function seccion(){

    
    let seccion = document.createElement('seccion');

    //Header 
    seccion.appendChild(header());

    //seccion 
    seccion.appendChild(seccion1Component());

    //nav 
    seccion.appendChild(navComponent());


return seccion;
}

document.body.appendChild(seccion1());
