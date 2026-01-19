const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mobileNav');

toggle.onclick = () => nav.classList.toggle('active');

function toggleDark() {
  document.body.classList.toggle('dark');
}

// Scroll-reactive purple lighting
window.addEventListener('scroll', () => {
  const glow = Math.min(0.6, window.scrollY / 600);
  document.documentElement.style.setProperty(
    '--accent-glow',
    `rgba(126, 23, 209, ${glow})`
  );
});

