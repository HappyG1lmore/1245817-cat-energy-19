var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__button');

navButton.addEventListener('click', function() {
  navMain.classList.toggle ('main-nav--closed');
  navMain.classList.toggle ('main-nav--opened');
});
