const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mainMenu');

btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    // Actualizamos atributos de accesibilidad
    btn.setAttribute('aria-expanded', !isExpanded);

    // Cambiamos estados visuales
    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active'); // Esto activa la transformación a "X"
});
