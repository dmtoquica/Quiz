// Lista donde se guardarán los cupones generados
let cupones = [];

// Función para generar un código aleatorio de 8 caracteres
function generarCupon() {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let cupon = '';
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        cupon += caracteres[randomIndex];
    }

    // Guardar el cupón en la lista
    cupones.push(cupon);
    
    // Mostrar el cupón generado en la página
    document.getElementById("cuponGenerado").innerText = "Tu cupón: " + cupon;
    console.log("Cupón generado:", cupones); // Mostrar en consola
}

// Función para validar un cupón ingresado por el usuario
function validarCupon() {
    let inputCupon = document.getElementById("inputCupon").value;

    if (cupones.includes(inputCupon)) {
        document.getElementById("resultado").innerText = "Cupón válido ✅";
        document.getElementById("resultado").className = "correcto";

        // Eliminar el cupón usado para que no se pueda reutilizar
        cupones = cupones.filter(cupon => cupon !== inputCupon);
    } else {
        document.getElementById("resultado").innerText = "Cupón inválido ❌";
        document.getElementById("resultado").className = "incorrecto";
    }
}

// Conectar funciones con los botones
document.getElementById("generar").addEventListener("click", generarCupon);
document.getElementById("validar").addEventListener("click", validarCupon);
