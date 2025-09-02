export function navComponent() {

    let items = document.createElement('div');
    items.className = "items";

    // 👜
    let cuadro1 = document.createElement('div');
    cuadro1.className = "cuadro";
    cuadro1.textContent = "🛍️";
    cuadro1.addEventListener("click", () => {
        document.body.innerHTML = "";
    });
    items.appendChild(cuadro1);

    // 📦
    let cuadro2 = document.createElement('div');
    cuadro2.className = "cuadro";
    cuadro2.textContent = "📦";
    cuadro2.addEventListener("click", () => {
        document.body.innerHTML = "";
    });
    items.appendChild(cuadro2);

    // 🛖
    let cuadro3 = document.createElement('div');
    cuadro3.className = "cuadro";
    cuadro3.textContent = "🛖";
    cuadro3.addEventListener("click", () => {
        document.body.innerHTML = "";
    });
    items.appendChild(cuadro3);

    // 🛒
    let cuadro4 = document.createElement('div');
    cuadro4.className = "cuadro";
    cuadro4.textContent = "🛒";
    cuadro4.addEventListener("click", () => {
        document.body.innerHTML = "";
    });
    items.appendChild(cuadro4);

    return items;
}
