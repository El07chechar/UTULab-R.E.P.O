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

// Seleciona todos los elementos de categoria
const categorias = document.querySelectorAll('.categoria');

categorias.forEach(categoria => {
  const texto = categoria.querySelector('.hover-texto');

  categoria.addEventListener('mouseenter', () => {
    texto.style.opacity = 1;
    categoria.querySelector('img').style.transform = 'scale(1.1)';
  });

  categoria.addEventListener('mouseleave', () => {
    texto.style.opacity = 0;
    categoria.querySelector('img').style.transform = 'scale(1)';
  });
});
