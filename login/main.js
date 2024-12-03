function procesarRegistro() {
    var nombreCompleto = document.getElementById('nombres').value.trim().toLowerCase();
    var apellidoCompleto = document.getElementById('apellidos').value.trim().toLowerCase();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var contrasena = document.getElementById('contraseña1').value;

    if (!validarContrasena(contrasena)) {
        alert("La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial.");
        return false;
    }

    var correo = generarCorreo(nombreCompleto, apellidoCompleto, fechaNacimiento);
    document.getElementById('resultado').innerHTML = "Registro exitoso<br>Correo generado: " + correo + "@gmail.com";
    return false;
}

function validarContrasena(contrasena) {
    var mayuscula = /[A-Z]/;
    var minuscula = /[a-z]/;
    var numero = /[0-9]/;
    var caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    return mayuscula.test(contrasena) && minuscula.test(contrasena) && numero.test(contrasena) && caracterEspecial.test(contrasena);
}

function generarCorreo(nombreCompleto, apellidoCompleto, fechaNacimiento) {
    var nombres = nombreCompleto.split(" ");
    var apellidos = apellidoCompleto.split(" ");
    var primerNombre = nombres[0];
    var segundoNombre = nombres.length > 1 ? nombres[1] : "";
    var primerApellido = apellidos[0];
    var segundoApellido = apellidos.length > 1 ? apellidos[1] : "";
    
    var primeraLetraApellido1 = primerApellido.charAt(0);
    var segundaYterceraLetraNombre1 = primerNombre.substr(1, 2);
    var ultimasDosLetrasApellido2 = segundoApellido ? segundoApellido.slice(-2) : primeraLetraApellido1;
    var ultimosCincoCaracteresSegundoNombre = segundoNombre ? segundoNombre.slice(-5) : segundaYterceraLetraNombre1;
    var ultimosDosAnio = fechaNacimiento.slice(2, 4);

    return (
        alert(        primeraLetraApellido1 +
            segundaYterceraLetraNombre1 +
            ultimasDosLetrasApellido2 +
            ultimosCincoCaracteresSegundoNombre +
            ultimosDosAnio + "@gmail.com"
    )
    );
}