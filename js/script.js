
//funcion para el icon del menu en pantalla chica
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu-icon');
    const menuContainer = document.querySelector('.menu-container');

    menuIcon.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
    });
});
