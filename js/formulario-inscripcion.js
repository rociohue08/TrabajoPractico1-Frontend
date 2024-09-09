

const selectCarreras = document.getElementById('opciones');

// Traer datos del archivo JSON
fetch('../js/opciones.json')
    .then(response => {
        return response.json(); // Convierte la respuesta a JSON
    })
    .then(data => {
        // Recorre el array de carreras y agrega opciones al select
        data.carreras.forEach(carrera => {
            const option = document.createElement('option');
            option.value = carrera; // Valor de la opción
            option.textContent = carrera; // Texto mostrado
            selectCarreras.appendChild(option); // Agrega la opción al <select>
        });
    })

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    // Crear un nuevo objeto FormData a partir del formulario
    const formData = new FormData(formulario);

    // Convertir FormData a un objeto JavaScript
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log('Datos del formulario:', formObject);
    alert('El formulario fue enviado con exito');
});
