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
