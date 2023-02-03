// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyNav();
};
document.addEventListener('touchmove', stickyNav, false);
// document.addEventListener('scroll', stickyNav, false);

// Get the navbar
const navbar = document.querySelector('#navbar');
const main = document.querySelector('#main');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    main.classList.add('fixed');
  } else {
    navbar.classList.remove('sticky');
    main.classList.remove('fixed');
  }
}

// Animation logo

const logo = document.querySelector('.imglogo');
const container = document.querySelector('.welcome');

container.addEventListener('mousemove', (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  logo.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
});
// in
container.addEventListener('mouseenter', (e) => {
  logo.style.transition = 'all 350ms ease-out';
});

// out

container.addEventListener('mouseleave', (e) => {
  logo.style.transition = 'all 350ms ease-out';
  logo.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
