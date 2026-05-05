/* =============================================
   MAIN.JS — Interacciones generales
   - Barra de progreso de scroll
   - Menú hamburguesa (móvil)
   - Scroll reveal de secciones
   - Resaltar enlace activo en el sidebar
============================================= */

/* ---- BARRA DE PROGRESO ---- */
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  const pct   = (window.scrollY / total) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
});

/* ---- HAMBURGER (menú móvil) ---- */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* ---- SCROLL REVEAL ---- */
/* Las secciones aparecen con fade+slide cuando entran en viewport */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.doc-section').forEach(el => revealObserver.observe(el));

/* ---- SIDEBAR: ENLACE ACTIVO ---- */
/* Resalta en el índice la sección que estás viendo */
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

const activeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.sidebar-nav a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll('.doc-section').forEach(s => activeObserver.observe(s));
