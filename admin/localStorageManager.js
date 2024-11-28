const STORAGE_KEY = "productos";

// Obtener productos desde localStorage
export function getProductos() {
    const productos = localStorage.getItem(STORAGE_KEY);
    return productos ? JSON.parse(productos) : [];
}

// Guardar productos en localStorage
export function saveProductos(productos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
}

// Agregar un producto nuevo al inicio
export function addProducto(producto) {
    const productos = getProductos();
    productos.unshift(producto); // Agregar al inicio para que el producto más reciente sea el primero
    saveProductos(productos);
}

// Eliminar un producto por ID
export function deleteProducto(id) {
    let productos = getProductos();
    productos = productos.filter(producto => producto.id !== id);
    saveProductos(productos);
}

// Obtener productos por categoría
export function getProductosPorCategoria(categoria) {
    const productos = getProductos();
    return productos.filter(producto => producto.categoria === categoria);
}

