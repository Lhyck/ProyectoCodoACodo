
function onClick(event) {
    event.preventDefault();
    this.style.backgroundColor = "violet";
    console.log("click ...");
    console.log(event);

    const mensaje = {

        nombre: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('message').value,

    }
    console.log(mensaje);


    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(mensaje),
            headers: { "Content-type": "application/json; charset" }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                ' Gracias !! Su mensaje se ha enviado con exito ... ',
                ' Estaremos en contacto a la brevedad '

            );
            cleanForm();

        })
        .catch((err) => console.log(err));
}

function cleanForm() {
    let formulario = document.getElementById('form1');
    formulario.reset();
}

function redirectUrl() {
    window.location.href = "http://127.0.0.1:5502/";
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

//json de fragancias/

/// ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
// setItem guarda datos en el dispositivo
localStorage.setItem("apellido", "Perez")
localStorage.setItem("nombre", "Juan")
console.log("Datos guardados.")
} else {
console.log("Web Storage no soportado.")
}
// ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
// getItem recupera datos del dispositivo
ape = localStorage.getItem("apellido")
nom = localStorage.getItem("nombre")
console.log(ape + ", " + nom)
} else {
console.log("Web Storage no soportado.")
}

