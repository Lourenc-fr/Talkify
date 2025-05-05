const header = document.querySelector('.header');
const icons = document.querySelectorAll('.footer__social li img');
let index = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header.classList.add('header__scroll');
  } else {
    header.classList.remove('header__scroll');
  }
});

function animateIconsLoop() {
  icons[index].style.transform = 'scale(1.25)';

  setTimeout(() => {
    icons[index].style.transform = 'scale(1)';
    index = (index + 1) % icons.length;
    setTimeout(animateIconsLoop, 500);
  }, 1000);
}

animateIconsLoop();