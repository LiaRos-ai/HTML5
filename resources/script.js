// Obtener los elementos que se animarán
const fadeInElements = document.querySelectorAll('.fade-in');

// Función para agregar la clase que activa la animación
function fadeIn() {
  fadeInElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      element.classList.add('fade-in-animation');
    }
  });
}

// Ejecutar la función cuando se cargue la página y se haga scroll
window.addEventListener('load', fadeIn);
window.addEventListener('scroll', fadeIn);


