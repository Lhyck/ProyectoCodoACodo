document.getElementById("form1").addEventListener("submit", function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();
    
    // Obtener los valores de los campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var message = document.getElementById("message").value;
    
    // Validar cada campo
    if (name.trim() === "") {
        alert("Por favor ingresa tu nombre.");
        return;
    }
    
    if (email.trim() === "") {
        alert("Por favor ingresa tu correo electrónico.");
        return;
    }
    
    if (fechaNacimiento.trim() === "") {
        alert("Por favor ingresa tu fecha de nacimiento.");
        return;
    }
    
    if (message.trim() === "") {
        alert("Por favor ingresa un mensaje.");
        return;
    }
    
    // Si todos los campos están completos, enviar el formulario
    this.submit();
});
