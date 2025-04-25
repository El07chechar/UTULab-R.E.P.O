let indiceActual = {};

function moverSlide(direccion, carruselId) {
    const carrusel = document.getElementById(carruselId);
    const slides = carrusel.querySelectorAll(".slides");
    const totalSlides = slides.children.length;

    if (!indiceActual[carruselId]) {
        indiceActual[carruselId] = 0;
    }

    indiceActual[carruselId] += direccion;

    if (indiceActual[carruselId] < 0) {
        indiceActual[carruselId] = totalSlides - 1;
    } else if (indiceActual[carruselId] >= totalSlides) {
        indiceActual[carruselId] = 0;
    }

    const offset = -indiceActual[carruselId] * 100;
    slides.style.transform = `translateX(${offset}%)`;
}