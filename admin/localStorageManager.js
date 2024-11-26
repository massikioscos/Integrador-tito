// localStorageManager.js

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

// Agregar un producto nuevo
export function addProducto(producto) {
    const productos = getProductos();
    productos.push(producto);
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

export function getProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

export function saveProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

export function addProducto(producto) {
    const productos = getProductos();
    productos.push(producto);
    saveProductos(productos);
}

export function deleteProducto(id) {
    const productos = getProductos();
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    saveProductos(nuevosProductos);
}

export function getProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

export function addProducto(producto) {
    const productos = getProductos();
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
}

export function deleteProducto(id) {
    let productos = getProductos();
    productos = productos.filter((producto) => producto.id !== id);
    localStorage.setItem("productos", JSON.stringify(productos));
}
