     // Función para hacer scroll al inicio de la página
     document.getElementById('btn-volver').addEventListener('click', function (e) {
        e.preventDefault(); // Evita comportamiento predeterminado del enlace
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const contenedorProductos = document.getElementById("contenedor-productos");
        const productos = obtenerProductos();
    
        // Filtrar productos por categoría
        const productosAros = productos.filter(
            (producto) => producto.categoria === "aros"
        );
    
        // Renderizar nuevos productos
        productosAros.forEach((producto) => {
            const productoHTML = `
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
            contenedorProductos.innerHTML += productoHTML;
        });
    });
    
    // Simular la base de datos de productos
    function obtenerProductos() {
        return [
            {
                id: 6,
                categoria: "aros",
                nombre: "Aro Esmeralda",
                precio: 50000,
                descripcion: "Aros con piedras de esmeralda",
                imagen: "/anillos/nuevo-aros-esmeralda.webp",
            },
            {
                id: 7,
                categoria: "aros",
                nombre: "Aro Rubí",
                precio: 55000,
                descripcion: "Diseño elegante con rubíes",
                imagen: "/anillos/nuevo-aros-rubi.webp",
            },
        ];
    }
    document.addEventListener("DOMContentLoaded", () => {
        // Cargar y mostrar productos de la categoría "aros"
        renderProductos();
    
        function renderProductos() {
            const productos = JSON.parse(localStorage.getItem("productos")) || [];
            const productosAros = productos.filter(producto => producto.categoria === "aros");
    
            const productContent = document.querySelector(".product-content");
            productContent.innerHTML = "";
    
            productosAros.forEach(producto => {
                const productElement = `
                    <div class="product">
                        <img src="/productos/${producto.imagen}" alt="${producto.nombre}">
                        <div class="product-txt">
                            <h3>${producto.nombre}</h3>
                            <p>${producto.descripcion}</p>
                            <p class="precio">$${producto.precio}</p>
                            <a href="https://wa.me/2604390068" id="comprar" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                `;
                productContent.innerHTML += productElement;
            });
        }
    });
    