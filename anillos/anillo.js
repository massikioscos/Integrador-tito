import { getProductosPorCategoria } from './localStorageManager.js'; // Asegúrate de que la ruta sea correcta

document.addEventListener('DOMContentLoaded', () => {
    const productContent = document.querySelector('.product-content'); // Contenedor de productos
    const productosAnillos = getProductosPorCategoria('anillos'); // Filtrar productos por categoría

    // Verificar si hay productos en esta categoría
    if (productosAnillos.length === 0) {
        productContent.innerHTML = '<p>No hay anillos disponibles en este momento.</p>';
        return;
    }

    // Renderizar los productos
    productosAnillos.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-txt">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <a href="https://wa.me/2604390068" id="comprar" class="btn-comprar">Comprar</a>
            </div>
        `;

        productContent.appendChild(productDiv);
    });
});
