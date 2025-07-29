import { header} from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componets/seccion1/seccionComponents.js";
import { item } from "./modulos/item/itemModulo.js";

 function seccion(){

    let seccion = document.createElement('section');
     //header 
    seccion.appendChild(header())

    //seccion
    seccion.appendChild(seccion1());

    seccion.appendChild(item());


  


    return seccion;

}

document.body.appendChild(seccion());