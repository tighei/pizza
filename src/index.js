import './style.css';
/*
const btnUp = document.querySelector('.GoTop');

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
const homeLink1 = document.getElementById('home-link');
const menuLink1 = document.getElementById('menu-link');
const contactLink1 = document.getElementById('contact-link');
const body = document.querySelector('body');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
body.style.backgroundImage = 'url(pizza-pepperoni-on-the-table.jpg)';
homeLink1.addEventListener('click', () => {
  hideAllSections();
  home.classList.remove('hidden');
  body.style.backgroundImage = 'url(pizza-pepperoni-on-the-table.jpg)';
});

menuLink1.addEventListener('click', () => {
  hideAllSections();
  menu.classList.remove('hidden');
  body.style.backgroundImage = 'none';
});
contactLink1.addEventListener('click', () => {
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
 */
//nav bar
const nav = document.createElement('nav');
nav.id = 'nav-bar';
const logocorner = document.createElement('a');
logocorner.setAttribute('href', 'index.html');
const logoImg = document.createElement('img');

logoImg.classList.add('logo');
logoImg.setAttribute('alt', 'logo');
const navList = document.createElement('ul');
navList.classList.add('info');
//nav-links
const li1 = document.createElement('li'); // home
const li2 = document.createElement('li'); // menu
const li3 = document.createElement('li'); // contact
const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const contactLink = document.createElement('a');
homeLink.id = 'home-link';
menuLink.id = 'menu-link';
contactLink.id = 'contact-link';
homeLink.textContent = 'Home';
menuLink.textContent = 'Menu';
contactLink.textContent = 'Contact';
li1.appendChild(homeLink);
li2.appendChild(menuLink);
li3.appendChild(contactLink);
navList.append(li1, li2, li3);

//nav-btn
logocorner.appendChild(logoImg);
const navbtn = document.createElement('button');

navbtn.classList.add('btn');
navbtn.textContent = 'Order Now';

nav.append(logocorner, navList, navbtn);

document.body.appendChild(nav);
