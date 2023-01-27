// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyNav();
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

const logo = document.querySelector('.imglogo');
const container = document.querySelector('.welcome');

// Animation logo
container.addEventListener('mousemove', (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  logo.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
// in
container.addEventListener('mouseenter', (e) => {
  setTimeout(`{logo.style.transition='none'}; 10ms`);
});

// out

container.addEventListener('mouseleave', (e) => {
  logo.style.transition = 'all 0.75s ease';
  logo.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
