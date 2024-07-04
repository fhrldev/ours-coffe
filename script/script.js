// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');
const searhButton = document.querySelector('#search-button');

hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

//Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemn
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!searhButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});