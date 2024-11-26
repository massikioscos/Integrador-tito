// productos.js

// Obtener productos de localStorage
function obtenerProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

// Guardar productos en localStorage
function guardarProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Agregar producto
function agregarProducto(producto) {
    const productos = obtenerProductos();
    productos.push(producto);
    guardarProductos(productos);
}

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    const productos = obtenerProductos();
    return productos.filter(producto => producto.categoria === categoria);
}

// Eliminar producto
function eliminarProducto(id) {
    const productos = obtenerProductos();
    const productosActualizados = productos.filter(producto => producto.id !== id);
    guardarProductos(productosActualizados);
}
