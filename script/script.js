// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

const hamburger = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// Klik di luar sidebar untuk menghilangkan navbar
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});