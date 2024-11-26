import { addProducto, deleteProducto, getProductos } from "./localStorageManager.js";

document.addEventListener("DOMContentLoaded", () => {
    // Elementos DOM
    const loginForm = document.getElementById("loginForm");
    const addProductSection = document.getElementById("addProductSection");
    const addProductForm = document.getElementById("addProductForm");
    const productListContainer = document.getElementById("productListContainer");
    const productList = document.getElementById("productList");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");

    // Credenciales del administrador
    const adminCredentials = {
        username: "admin",
        password: "12345",
    };

    // Manejo de inicio de sesión
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === adminCredentials.username && password === adminCredentials.password) {
            // Credenciales correctas: ocultar login y mostrar las secciones
            errorMsg.classList.add("hidden");
            loginForm.classList.add("hidden");
            addProductSection.classList.remove("hidden");
            productListContainer.classList.remove("hidden");
            renderProductos();
        } else {
            // Credenciales incorrectas: mostrar mensaje de error
            errorMsg.textContent = "Usuario o contraseña incorrectos.";
            errorMsg.classList.remove("hidden");
        }
    });

    // Manejo de formulario para agregar productos
    addProductForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nuevoProducto = {
            id: Date.now(),
            nombre: document.getElementById("productName").value,
            precio: parseFloat(document.getElementById("productPrice").value).toFixed(2),
            imagen: document.getElementById("productImage").files[0]?.name || "",
            categoria: document.getElementById("productCategory").value,
            descripcion: document.getElementById("productDescription").value,
        };

        addProducto(nuevoProducto);
        renderProductos();
        addProductForm.reset();

        successMsg.textContent = "Producto agregado con éxito.";
        successMsg.classList.remove("hidden");
        setTimeout(() => successMsg.classList.add("hidden"), 3000);
    });

    // Renderizar productos en la lista
    function renderProductos() {
        const productos = getProductos();
        productList.innerHTML = "";

        productos.forEach((producto) => {
            const listItem = document.createElement("li");
            listItem.classList.add("product-item");
            listItem.innerHTML = `
                <div>
                    <strong>${producto.nombre}</strong> - $${producto.precio}
                    <br><em>${producto.categoria}</em>
                    <br>${producto.descripcion}
                </div>
                <button class="btn btn-delete" data-id="${producto.id}">Eliminar</button>
            `;

            // Botón para eliminar producto
            listItem.querySelector(".btn-delete").addEventListener("click", () => {
                deleteProducto(producto.id);
                renderProductos();
            });

            productList.appendChild(listItem);
        });
    }
});
