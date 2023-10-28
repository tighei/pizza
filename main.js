const btnUp = document.querySelector('.GoTop');
const nav = document.getElementById('nav-bar');
window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    btnUp.style.display = 'block';
    nav.style.backgroundColor = 'rgba(36, 36, 36,0.85)';
  } else {
    btnUp.style.display = 'none';
    nav.style.backgroundColor = 'rgba(36, 36, 36,0.6)';
  }
});

btnUp.addEventListener('click', () => {
  btnUp.style.display = 'none';
  window.scrollTo(0, 0);
});
const homeLink = document.getElementById('home-link');
const menuLink = document.getElementById('menu-link');
const contactLink = document.getElementById('contact-link');
const body = document.querySelector('body');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
homeLink.addEventListener('click', () => {
  hideAllSections();
  home.classList.remove('hidden');
  body.style.backgroundImage = 'url(/img/pizza-pepperoni-on-the-table.jpg)';
});

menuLink.addEventListener('click', () => {
  hideAllSections();
  menu.classList.remove('hidden');
  body.style.backgroundImage = 'none';
});

contactLink.addEventListener('click', () => {
  hideAllSections();
  contact.classList.remove('hidden');
  body.style.backgroundImage = 'none';
});

// Helper function to hide all sections
function hideAllSections() {
  home.classList.add('hidden');
  menu.classList.add('hidden');
  contact.classList.add('hidden');
}
