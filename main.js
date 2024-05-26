
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

//json de fragancias

document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
//document.getElementsByName('nameFragancia').addEventListener()

function cargarJSON(){
    fetch('fragancia.json')
      .then(function(res){
    
        return res.json();
      })
      .then(function(data){
        let html = '';
        data.forEach(function(fragancia) {

             html +=  ' <li>${fragancia.price}</li> ' ;         
            document.getElementById('resultado').innerHTML = html ;
        });
      })
}