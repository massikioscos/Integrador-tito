// render.js

// Renderizar productos en la página
function renderProductos(categoria, contenedorId) {
    const productos = filtrarPorCategoria(categoria);
    const contenedor = document.getElementById(contenedorId);

    contenedor.innerHTML = ""; // Limpiar contenedor
    productos.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("product");
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-txt">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <a href="https://wa.me/2604390068" class="btn-comprar">Comprar</a>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}
