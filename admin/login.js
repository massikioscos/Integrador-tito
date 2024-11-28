document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-login");
    const usuarioAdmin = "maximomartos@gmail.com";
    const contraseñaAdmin = "12345";

    formulario.onsubmit = function (evento) {
        evento.preventDefault(); // Evitar que el formulario recargue la página

        const usuario = document.getElementById("form-email").value;
        const contraseña = document.getElementById("form-password").value;

        // Verificar las credenciales
        if (usuario === usuarioAdmin && contraseña === contraseñaAdmin) {
            console.log("Credenciales correctas. Redirigiendo...");
            alert("Bienvenido Admin");

            // Redirigir a la página administradora dentro de la carpeta "admin"
            window.location.href = "../admin/administrador.html";
            window.location.href = "administrador.html";

        } else {
            console.log("Credenciales incorrectas");
            alert("Usuario o contraseña incorrectos");

            // Resetear el formulario
            formulario.reset();
            document.getElementById("form-email").focus();
        }
    };
});
