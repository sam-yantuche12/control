import { item } from "../../modulos/item/itemModulo.js";
import { productos } from "../../dataBases/productos.js";

export function seccion1(){

let seccion = document.createElement("section");
seccion.className = "seccion-1";

productos.forEach(Element => {
    seccion.appendChild(item(Element.title,Element.image,Element.price,Element.description));

});
return seccion;
}