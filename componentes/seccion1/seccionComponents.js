import { item } from "../item/itemModulo.js";
import { productos } from "../../dataBases/productos.js";

export function seccion1(){

let seccion = document.createElement("section");
seccion.className = "seccion-1";

productos.forEach(element => {
    seccion.appendChild(
        item(
            element.title,
            element.image,
            element.description,
            element.price,
        )
    )
});
seccion.appendChild(item());
return seccion;
}