const carruseles = document.querySelectorAll('.carrusel'); // Seleccionar todos los carruseles

carruseles.forEach(carrusel => {
  const contenedorSlides = carrusel.querySelector('.slides'); // Contenedor de slides del carrusel actual
  const btnPrev = carrusel.querySelector('.movimiento-slides-atras'); // Botón "atrás" del carrusel actual
  const btnNext = carrusel.querySelector('.movimiento-slides-adelante'); // Botón "adelante" del carrusel actual

  let indexActual = 0;

  // Evento para mover con los botones
  btnPrev.addEventListener('click', () => {
    const slideWidth = contenedorSlides.querySelector('.slide').offsetWidth;
    indexActual = Math.max(indexActual - 1, 0);
    contenedorSlides.style.transform = `translateX(-${indexActual * slideWidth}px)`;
  });

  btnNext.addEventListener('click', () => {
    const slideWidth = contenedorSlides.querySelector('.slide').offsetWidth;
    const visibleSlides = Math.floor(contenedorSlides.offsetWidth / slideWidth);
    const totalSlides = contenedorSlides.children.length;
    const maxIndex = Math.ceil(totalSlides - visibleSlides+1);
    indexActual = Math.min(indexActual + 1, maxIndex);
    contenedorSlides.style.transform = `translateX(-${indexActual * slideWidth}px)`;
  });
})