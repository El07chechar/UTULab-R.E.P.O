function iniciarCarrusel(idCarrusel) {
  const carrusel = document.getElementById(idCarrusel);
  const contenedor = carrusel.querySelector('.contenedor');
  const botonIzquierda = carrusel.querySelector('.movimiento--izquierda');
  const botonDerecha = carrusel.querySelector('.movimiento--derecha');
  const slides = carrusel.querySelectorAll('.contenedor__slide');

  let index = 0;

  function slidesAMostrar() {
    return window.innerWidth < 768 ? 2 : 4;
  }

  function moverCarrusel() {
    const desplazamiento = (100 / slidesAMostrar()) * index;
    contenedor.style.transform = `translateX(-${desplazamiento}%)`;
    actualizarBotones();
  }

  function actualizarBotones(){
    botonIzquierda.disabled = index === 0;
    botonDerecha.disabled = index >= slides.length - slidesAMostrar();
  }

  botonDerecha.addEventListener('click', () => {
    if (index < slides.length - slidesAMostrar()) {
      index++;
      moverCarrusel();
    }
  });

  botonIzquierda.addEventListener('click', () => {
    if (index > 0) {
      index--;
      moverCarrusel();
    }
  });

  window.addEventListener('resize', moverCarrusel)

  actualizarBotones();
}

iniciarCarrusel('carrusel1');
iniciarCarrusel('carrusel2');
iniciarCarrusel('carrusel3');
iniciarCarrusel('carrusel4');
