document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("addProductForm");
    const productList = document.getElementById("productList");

    // Obtener productos desde localStorage
    function getProductos() {
        return JSON.parse(localStorage.getItem("productos")) || [];
    }

    // Guardar productos en localStorage
    function saveProductos(productos) {
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    // Renderizar productos en la lista
    function renderProductos() {
        productList.innerHTML = ""; // Limpiar la lista antes de renderizar
        const productos = getProductos();
        productos.forEach(producto => {
            const productCard = document.createElement("div");
            productCard.classList.add("product");

            productCard.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <div class="product-txt">
                    <p><strong>ID:</strong> ${producto.id}</p>
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="precio">$${producto.precio}</p>
                    <button class="btn btn-delete" data-id="${producto.id}">Eliminar</button>
                </div>
            `;
            productList.appendChild(productCard);
        });

        // Agregar funcionalidad a los botones de eliminación
        document.querySelectorAll(".btn-delete").forEach(button => {
            button.addEventListener("click", handleDelete);
        });
    }

    // Manejar eliminación de productos
    function handleDelete(event) {
        const id = event.target.dataset.id;
        let productos = getProductos();
        productos = productos.filter(producto => producto.id !== id);
        saveProductos(productos);
        renderProductos();
    }

    // Manejar envío del formulario
    productForm.onsubmit = (event) => {
        event.preventDefault(); // Prevenir recarga de la página

        const nombre = document.getElementById("productName").value;
        const precio = document.getElementById("productPrice").value;
        const categoria = document.getElementById("productCategory").value;
        const descripcion = document.getElementById("productDescription").value;
        const imagenFile = document.getElementById("productImage").files[0];

        if (!imagenFile) return alert("Por favor, sube una imagen.");

        // Leer la imagen como base64
        const reader = new FileReader();
        reader.onload = function () {
            const nuevoProducto = {
                id: Date.now().toString(), // Generar un ID único
                nombre,
                precio,
                categoria,
                descripcion,
                imagen: reader.result, // Guardar imagen como base64
            };

            const productos = getProductos();
            productos.unshift(nuevoProducto); // Agregar el producto al inicio del arreglo
            saveProductos(productos);

            renderProductos(); // Renderizar la lista de productos
            productForm.reset(); // Resetear el formulario para permitir agregar más
        };

        // Leer la imagen seleccionada
        reader.onerror = function () {
            alert("Error al cargar la imagen. Inténtalo nuevamente.");
        };

        reader.readAsDataURL(imagenFile);
    };

    renderProductos(); // Renderizar productos al cargar la página
});
