import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponents.js";
import { navComponent } from "./componentes/nav/navComponent.js";

function seccion(){
    let seccion = document.getItem("seccion");


       let listaDeCompras = localStorage.getItem("CarritoLista");

        if (!listaDeCompras) {
            listaDeCompras = [];
            localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
            
        } else{
            listaDeCompras = JSON.parse(listaDeCompras);

        }
        console.log(listaDeCompras);
        

    //Header 
    seccion.appendChild(header());

    //seccion 
    seccion.appendChild(seccion1Component());



return seccion;
}

document.body.appendChild(seccion1());
document.body.appendChild(navComponent());
