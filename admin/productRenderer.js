import { getProductosPorCategoria } from "./localStorageManager.js";

export function renderizarProductos(categoria, contenedorId) {
    const contenedorProductos = document.getElementById(contenedorId);
    const productos = getProductosPorCategoria(categoria);

    contenedorProductos.innerHTML = ""; // Limpiar el contenedor

    productos.forEach(producto => {
        const tarjeta = `
            <div class="product">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="product-txt">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="precio">$${producto.precio}</p>
                    <a href="https://wa.me/2604390068" class="btn-comprar">Comprar</a>
                </div>
            </div>
        `;
        contenedorProductos.innerHTML += tarjeta;
    });
}
