const btnup = document.querySelector('.GoTop');

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    btnup.style.display = 'block';
  } else {
    btnup.style.display = 'none';
  }
});

btnup.addEventListener('click', () => {
  btnup.style.display = 'none';
  window.scrollTo(0, 0);
});
