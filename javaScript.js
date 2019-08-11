window.sr = ScrollReveal();

//con .algo para clases y # para ids

 //animaciones del header
sr.reveal('.navbar', { //para el menú
  duration: 1800,
  origin: 'bottom'
});

sr.reveal('.header-content-left', { //para la foto
  duration: 2000,
  origin: 'top',
  distance: '300px',
  reset: true
});

sr.reveal('.header-content-right', { //para el texto
  duration: 2000,
  origin: 'right',
  distance: '300px',
  reset: true
});

sr.reveal('.header-btn', { //para el botón
  duration: 2000,
  origin: 'bottom',
  delay: 500,
  reset: true
});

sr.reveal('#sobre-mi', { //para el sobre mí
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2,
  reset: true
});

sr.reveal('footer', { //para el sobre mí
  duration: 2000,
  origin: 'left',
  distance: '300px',
  delay:300,
  viewFactor: 0.2,
  reset: true
});

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
