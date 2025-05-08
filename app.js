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

  actualizarBotones();
}

iniciarCarrusel('carrusel1');
iniciarCarrusel('carrusel2');
iniciarCarrusel('carrusel3');
iniciarCarrusel('carrusel4');

//carga de enlaces
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      const offset = 200;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
});
