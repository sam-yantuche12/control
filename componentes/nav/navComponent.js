export function navComponent() {

    let items = document.createElement('div');
    items.className = "items";

    let cuadro1 = document.createElement('div');
    cuadro1.className = "cuadro";
    cuadro1.textContent = "👜";
    items.appendChild(cuadro1);

    let cuadro2 = document.createElement('div');
    cuadro2.className = "cuadro";
    cuadro2.textContent = "🎄";
    items.appendChild(cuadro2);

    let cuadro3 = document.createElement('div');
    cuadro3.className = "cuadro";
    cuadro3.textContent = "🛖";
    items.appendChild(cuadro3);

    let cuadro4 = document.createElement('div');
    cuadro4.className = "cuadro";
    cuadro4.textContent = "🛒";
    items.appendChild(cuadro4);

    return items;
}