$(document).ready(function() {

    $('.slider').slider();
    $('.slider').slider({ height: 575 });
    $('.parallax').parallax();

    window.addEventListener("scroll", cambioColor);

})

function cambioColor() {
    var distancia = window.pageYOffset || document.documentElement.scrollTop;
    var nuevonav = document.getElementsByClassName("nav-wrapper");

    if (distancia > 50) {
        nuevonav.classList.add("nuevoNav");

    } else {
        nuevonav.classList.remove("nuevoNav");
    }
}