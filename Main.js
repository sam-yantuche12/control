 
 function seccion(){

    let seccion = document.createElement('section');

    let h1 = document.createElement('h1');
    h1.className = "titulo";
    h1.innerText = "hola mundo";
    seccion.appendChild(h1);

    
    let parrafo = document.createElement('parrafo');
    parrafo.innerText = "introduccion a js";
    seccion.appendChild(parrafo);


    return seccion;

}

document.body.appendChild(seccion());