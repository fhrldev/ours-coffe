// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

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

//Toggle class active shopping cart
const shopCartButton = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').addEventListener('click', (e) => {
  shopCartButton.classList.toggle('active');
  e.preventDefault();
});

// Klik di luar elemen
const searhButton = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!searhButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shopCartButton.contains(e.target)) {
    shopCartButton.classList.remove('active');
  }
});

